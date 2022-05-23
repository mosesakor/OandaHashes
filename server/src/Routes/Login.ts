import validator, { Joi } from 'koa-context-validator';
import Router from '@koa/router';
import Bcrypt from 'bcrypt';
import * as Jwt from 'async-jsonwebtoken';
import ResponseType from '../ResponseType';

export default {
  route: (router: Router) => {
    router.post(
      '/login',
      validator({
        body: Joi.object().keys({
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      }),
      async (ctx, next) => {
        ctx.accepts('application/json');

        const data = ctx.request.body as {
          email: string;
          password: string;
        };

        const user = await ctx.users.findOne({ email: data.email });

        if (!user) {
          ctx.status = 400;
          ctx.body = {
            type: ResponseType.UserNotFound,
          };
        } else if (
          (await Bcrypt.compare(data.password, user.password)) === true
        ) {
          ctx.status = 200;
          ctx.body = {
            type: ResponseType.Success,
            token: (
              await Jwt.sign({ id: user.id }, user.password, {
                expiresIn: '30d',
              })
            )[0],
          };
        } else {
          ctx.status = 400;
          ctx.body = {
            type: ResponseType.Unauthenticated,
          };
        }
        return next();
      },
    );
  },
};
