import * as Jwt from 'async-jsonwebtoken';
import * as MongoDB from 'mongodb';
import { Result } from '@badrap/result';

import User from '../Models/User';
import ResponseType from '../ResponseType';

export class TokenCheckError extends Error {
  constructor(reason: ResponseType) {
    super(`Failed to check token: ${reason}`);
    Object.setPrototypeOf(this, TokenCheckError.prototype);
  }
}

export default async function checkToken(
  users: MongoDB.Collection<User>,
  token: string,
): Promise<Result<string, TokenCheckError>> {
  const { id } = Jwt.decode(token) as { id: string };
  const user = await users.findOne({ id });

  if (!user) {
    return Result.err(new TokenCheckError(ResponseType.UserNotFound));
  }

  if (!(await Jwt.verify(token, user.password, { maxAge: '30d' }))) {
    return Result.err(new TokenCheckError(ResponseType.Unauthenticated));
  }

  return Result.ok(id);
}
