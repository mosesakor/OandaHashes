const enum ResponseType {
  Success = 0,
  EmailExists,
  SchemaValidationFailed,
  UserNotFound,
  Unauthenticated,
  Unauthorized,
  AlreadyLoggedIn,
  InternalServerError = 0xFFFF,
}

export default ResponseType;
