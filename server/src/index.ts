import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import path from 'path';
import json from 'koa-json';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import mongo from 'koa-mongo';
import Boom from '@hapi/boom';
import mongodb from 'mongodb';
import Register from './Routes/Register';
import Login from './Routes/Login';
import User from './Models/User';
import Config from './Config';
import ErrorHandler from './ErrorHandler';

const app = new Koa();
app.keys = ['ASFSALK^JN$L%^KsGASKGasfdsdK@#%94368204'];
const router = new Router();

Login.route(router);
Register.route(router);

declare module 'koa' {
  interface BaseContext {
    users: mongodb.Collection<User>;
  }
}

app
  .use(ErrorHandler.handler)
  .use(mongo({ db: 'atomichashes' }))
  .use(async (ctx, next) => {
    Object.defineProperty(ctx, 'users', {
      get() {
        return ctx.db.collection<User>('users');
      },
    });
    return next();
  })
  .use(session(Config, app))
  .use(json({ pretty: false, param: 'pretty' }))
  .use(bodyParser())
  .use(router.routes())
  .use(
    router.allowedMethods({
      throw: true,
      notImplemented: () => Boom.notImplemented(),
      methodNotAllowed: () => Boom.methodNotAllowed(),
    }),
  )
  .use(router.middleware())
  .use(serve(path.join(__dirname, 'public')))
  .listen(8080);

process.stdout.write('Server running on port 8080\n');
