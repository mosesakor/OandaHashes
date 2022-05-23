import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import path from 'path';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import mongo from 'koa-mongo';
import Boom from '@hapi/boom';
import * as MongoDB from 'mongodb';

import Register from './Routes/Register';
import Login from './Routes/Login';
import User from './Models/User';
import ErrorHandler from './ErrorHandler';
import GetUser from './Routes/GetUser';
import GetUsers from './Routes/GetUsers';
import DeleteUser from './Routes/DeleteUser';
import UpdateUser from './Routes/UpdateUser';

const app = new Koa();
const router = new Router();

Login.route(router);
Register.route(router);
GetUsers.route(router);
GetUser.route(router);
DeleteUser.route(router);
UpdateUser.route(router);

declare module 'koa' {
  interface BaseContext {
    users: MongoDB.Collection<User>;
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
  .use(serve(path.join(__dirname, 'public')))
  .listen(8080);

process.stdout.write('Server running on port 8080\n');
