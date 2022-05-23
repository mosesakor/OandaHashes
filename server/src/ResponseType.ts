const enum ResponseType {
  Success = 0,
  EmailExists,
  SchemaValidationFailed,
  UserNotFound,
  Unauthenticated,
  Unauthorised,
  AlreadyLoggedIn,
  InternalServerError,
}

export default ResponseType;
