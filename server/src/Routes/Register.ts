import Router from 'koa-router';
import { Snowflake } from 'nodejs-snowflake';
import bcrypt from 'bcrypt';
import validator, { Joi } from 'koa-context-validator';
import User from '../Models/User';
import ResponseType from '../ResponseType';

export default {
  route: (router: Router) => {
    router.post(
      '/api/register',
      validator({
        body: Joi.object().keys({
          username: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      }),
      async (ctx, next) => {
        ctx.accepts('application/json');

        const data = ctx.request.body as {
          username: string;
          email: string;
          password: string;
        };

        if (await ctx.users.countDocuments({ email: data.email }) !== 0) {
          ctx.body = {
            type: ResponseType.EmailExists,
          };
          ctx.status = 400;
        } else {
          const user: User = {
            id: new Snowflake()
              .idFromTimestamp(Date.UTC(2022, 1, 1))
              .toString(),
            username: data.username,
            email: data.email,
            password: await bcrypt.hash(data.password, 10),
          };

          await ctx.users.insertOne(user);

          ctx.body = {
            type: ResponseType.Success,
            id: user.id,
          };
        }

        return next();
      },
    );
  },
};
