import Router from '@koa/router';
import ResponseType from '../ResponseType';
import checkToken from '../Utils/CheckToken';

export default {
  route: (router: Router) => {
    router.get('/api/users/:id(\\d+)', async (ctx, next) => {
      const res = await checkToken(
        ctx.users,
        ctx.request.headers.authorization || '',
      );
      if (!ctx.request.headers.authorization || res.isErr) {
        ctx.status = 401;
        ctx.body = {
          type: ResponseType.Unauthenticated,
        };
      } else {
        const user = await ctx.users.findOne({ id: ctx.params.id });

        if (!user) {
          ctx.status = 400;
          ctx.body = {
            type: ResponseType.UserNotFound,
          };
        } else {
          ctx.status = 200;
          ctx.body = {
            type: ResponseType.Success,
            user: {
              id: user.id,
              username: user.username,
            },
          };
          if (user.id === res.unwrap()) ctx.body.user.email = user.email;
        }
      }

      return next();
    });
  },
};
