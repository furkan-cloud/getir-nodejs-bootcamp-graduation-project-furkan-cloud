class ApiError extends Error {
  constructor(message, errorCode, statusCode) {
    super(message);

    this.message = message;
    this.status = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  static notFound(message) {
    this.errorCode = 1;
    this.status = 404;
    return new ApiError(message, this.errorCode, this.status);
  }

  static validationError(message) {
    this.errorCode = 2;
    this.status = 400;
    return new ApiError(message, this.errorCode, this.status);
  }

  static internalError(message) {
    this.errorCode = 3;
    this.status = 500;
    return new ApiError(message, this.errorCode, this.status);
  }
}

module.exports = ApiError;
