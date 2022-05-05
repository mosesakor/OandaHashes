import validator, { Joi } from 'koa-context-validator';
import Router from 'koa-router';
import bcrypt from 'bcrypt';
import ResponseType from '../ResponseType';
import UserState from '../State/UserState';

export default {
  route: (router: Router) => {
    router.post(
      '/api/login',
      validator({
        body: Joi.object().keys({
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      }),
      async (ctx, next) => {
        ctx.accepts('application/json');

        if (ctx.session.isNew) {
          ctx.status = 406;
          ctx.body = {
            type: ResponseType.AlreadyLoggedIn,
          };
        } else {
          const data = ctx.request.body as {
            email: string;
            password: string;
          };

          try {
            const user = await ctx.users.findOne({ email: data.email });
            if (!user) {
              throw new Error();
            }

            if ((await bcrypt.compare(data.password, user.password)) === true) {
              ctx.body = {
                type: ResponseType.Success,
                id: user.id,
              };
              (ctx.session.user as UserState).id = user.id;
            } else {
              ctx.body = {
                type: ResponseType.Unauthenticated,
              };
            }
          } catch (_) {
            ctx.body = {
              type: ResponseType.UserNotFound,
            };
          }
        }
        return next();
      },
    );
  },
};
