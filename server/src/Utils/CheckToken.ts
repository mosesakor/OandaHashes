import * as Jwt from 'async-jsonwebtoken';
import * as MongoDB from 'mongodb';
import { Result } from '@badrap/result';

import User from '../Models/User';
import ResponseType from '../ResponseType';
import UserBase from '../Models/UserBase';

export class TokenCheckError extends Error {
  public reason: ResponseType;

  constructor(reason: ResponseType) {
    super(`Failed to check token: ${reason}`);
    this.reason = reason;
    Object.setPrototypeOf(this, TokenCheckError.prototype);
  }
}

export default async function checkToken(
  users: MongoDB.Collection<User>,
  token: string,
): Promise<Result<UserBase, TokenCheckError>> {
  const data = Jwt.decode(token) as { id?: string };

  if (!data || !data.id) {
    return Result.err(new TokenCheckError(ResponseType.Unauthorised));
  }

  const user = await users.findOne({ id: data.id });

  if (!user) {
    return Result.err(new TokenCheckError(ResponseType.UserNotFound));
  }

  if (!(await Jwt.verify(token, user.password, { maxAge: '30d' }))) {
    return Result.err(new TokenCheckError(ResponseType.Unauthenticated));
  }

  return Result.ok(user);
}
