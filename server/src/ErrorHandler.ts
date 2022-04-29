import Koa from 'koa';
import ResponseType from './ResponseType';

export default {
  handler: async (ctx: Koa.BaseContext, next: Koa.Next) => {
    try {
      await next();
    } catch (error) {
      const err = error as {
        statusCode?: number;
        status?: number;
        name?: string;
        message?: string;
      };
      if (err.name === 'ValidationError') {
        ctx.status = 400;
        ctx.body = {
          type: ResponseType.SchemaValidationFailed,
          message: err.message,
        };
      } else {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
          type: ResponseType.InternalServerError,
          name: err.name,
          message: err.message,
        };
      }
    }
  },
};
