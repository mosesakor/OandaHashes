import Router from '@koa/router';
import ResponseType from '../ResponseType';
import checkToken from '../Utils/CheckToken';

export default {
  route: (router: Router) => {
    router.get('/users', async (ctx, next) => {
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
        ctx.status = 200;
        ctx.body = {
          type: ResponseType.Success,
          users: (await ctx.users.find().toArray()).map((v) => v.id),
        };
      }

      return next();
    });
  },
};
