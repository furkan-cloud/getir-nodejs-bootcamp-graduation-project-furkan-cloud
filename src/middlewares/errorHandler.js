const ApiError = require('../errors/ApiError');

// error payload for development
const sendErrorDev = (err, res) => {
  res.status(err.status).json({
    status: err.status,
    stack: err.stack,
    code: err.errorCode,
    msg: err.message || 'Internal Server Error...',
    records: [],
  });
};

// error payload for production
const sendErrorProd = (err, res) => {
  res.status(err.status).json({
    code: err.errorCode,
    msg: err.message || 'Internal Server Error...',
    records: [],
  });
};

// CastError Handler
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new ApiError(message, 2, 400);
};

// Error Handler for all errors
module.exports = (err, req, res, next) => {
  err.status = err.status || 500;
  if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.name === 'CastError') {
      error = handleCastErrorDB(error);
    }
    sendErrorProd(err, res);
  } else {
    sendErrorDev(err, res);
  }
};
