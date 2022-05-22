const enum ResponseType {
  Success = 0,
  EmailExists,
  SchemaValidationFailed,
  UserNotFound,
  Unauthenticated,
  Unauthorised,
  AlreadyLoggedIn,
  InternalServerError = 0xffff,
}

export default ResponseType;
