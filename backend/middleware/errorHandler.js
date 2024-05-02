const constant = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;

  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.status(statusCode).json({
        Title: "Validation Error",
        Message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constant.UNAUTHORIZED:
      res.status(statusCode).json({
        Title: "Unauthorized",
        Message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constant.FORBIDDEN:
      res.status(statusCode).json({
        Title: "Forbidden",
        Message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constant.NOT_FOUND:
      res.status(statusCode).json({
        Title: "Not found",
        Message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constant.SERVER_ERROR:
      res.status(statusCode).json({
        Title: "Server Error",
        Message: err.message,
        StackTrace: err.stack,
      });
      break;

    default:
      console.log("No Error, Every Thing Working Fine");

      break;
  }
};

export default errorHandler;
