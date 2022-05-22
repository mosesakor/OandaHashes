import Bcrypt from 'bcrypt';
import Router from '@koa/router';
import validator, { Joi } from 'koa-context-validator';
import ResponseType from '../ResponseType';
import checkToken from '../Utils/CheckToken';

export default {
  route: (router: Router) => {
    router.patch(
      '/api/users/:id(\\d+)',
      validator({
        body: Joi.object().keys({
          username: Joi.string().optional(),
          email: Joi.string().email().optional(),
          password: Joi.string().optional(),
          balance: Joi.number().optional(),
        }),
      }),
      async (ctx, next) => {
        const res = await checkToken(
          ctx.users,
          ctx.request.headers.authorization || '',
        );
        if (!ctx.request.headers.authorization || res.isErr) {
          ctx.status = 401;
          ctx.body = {
            type: res.isErr ? res.error.reason : ResponseType.Unauthenticated,
          };
        } else if (!res.unwrap().isStaff) {
          ctx.status = 401;
          ctx.body = {
            type: res.isErr ? res.error.reason : ResponseType.Unauthorised,
          };
        } else {
          const req = { $set: {} };
          if (ctx.request.body.username) {
            (req as any).$set.username = ctx.request.body.username;
          }
          if (ctx.request.body.email) {
            if (
              (await ctx.users.countDocuments(
                { email: { $eq: ctx.request.body.email } },
                { limit: 1 },
              )) !== 0
            ) {
              ctx.status = 409;
              ctx.body = {
                type: ResponseType.EmailExists,
              };
              return next();
            }

            (req as any).$set.email = ctx.request.body.email;
          }
          if (ctx.request.body.password) {
            (req as any).$set.password = await Bcrypt.hash(
              ctx.request.body.password,
              10,
            );
          }
          if (ctx.request.body.balance) {
            (req as any).$set.balance = ctx.request.body.balance;
          }
          const updRes = await ctx.users.updateOne({ id: ctx.params.id }, req);

          if (updRes.matchedCount <= 0) {
            ctx.status = 400;
            ctx.body = {
              type: ResponseType.UserNotFound,
            };
          } else {
            ctx.status = 200;
            ctx.body = { type: ResponseType.Success };
          }
        }

        return next();
      },
    );
  },
};