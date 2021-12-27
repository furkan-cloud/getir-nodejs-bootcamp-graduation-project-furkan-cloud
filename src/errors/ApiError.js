class ApiError extends Error {
  // error instance for all errors
  constructor(message, errorCode, statusCode) {
    super(message);

    this.message = message;
    this.status = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor); // hide error stack for production
  }

  // Error method for undefined URL
  static notFound(message) {
    this.errorCode = 1;
    this.status = 404;
    return new ApiError(message, this.errorCode, this.status);
  }

  // Error method for validations
  static validationError(message) {
    this.errorCode = 2;
    this.status = 400;
    return new ApiError(message, this.errorCode, this.status);
  }

  // Error method for internal server errors
  static internalError(message) {
    this.errorCode = 3;
    this.status = 500;
    return new ApiError(message, this.errorCode, this.status);
  }

  // Error handler for not allowed methods
  static badRequest(message) {
    this.errorCode = 4;
    this.status = 400;
    return new ApiError(message, this.errorCode, this.status);
  }
}

module.exports = ApiError;
