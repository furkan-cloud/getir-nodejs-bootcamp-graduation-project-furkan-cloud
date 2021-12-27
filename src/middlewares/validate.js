const ApiError = require('../errors/ApiError');

// validate middleware for validating request payload with Joi
const validate = (schema, source) => (req, res, next) => {
  const { value, error } = schema.validate(req[source]);

  // Format validation error
  if (error) {
    const errorMessage = error?.details
      ?.map((detail) => detail?.message)
      .join(', ');
    return next(ApiError.validationError(errorMessage)); // throw validation error for invalid request body params
  }
  Object.assign(req, value); // Assign validated value to request payload
  return next(); // Pass to next middleware
};

module.exports = validate;
