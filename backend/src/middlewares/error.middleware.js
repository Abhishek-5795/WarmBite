const error = (err, req, res, next) => {
  //* ValidationError
  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.message = Object.values(err.errors).map((ele) => ele.message);
  }

  //* JsonWebTokenError
  if (err.name === "JsonWebTokenError") {
    err.statusCode = 401;
    err.message = "Please log in again";
  }

  //* CastError
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = "Invalid MongoDB ID";
  }

  //* MulterError
  if (err.name === "MulterError") {
    err.name = 400;
    err.message = err.code;
  }

  // console.log(err);
  //* global error handler
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    // errObj: err,
    line: err.stack,
  });
};

module.exports = error;
