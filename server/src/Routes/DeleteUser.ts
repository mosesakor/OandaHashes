import Router from '@koa/router';
import ResponseType from '../ResponseType';
import checkToken from '../Utils/CheckToken';

export default {
  route: (router: Router) => {
    router.delete('/users/:id(\\d+)', async (ctx, next) => {
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
        const delRes = await ctx.users.deleteOne({ id: ctx.params.id });

        if (delRes.deletedCount <= 0) {
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
    });
  },
};
