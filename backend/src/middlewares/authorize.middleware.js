const expressAsyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");

const authorize = expressAsyncHandler(async (req, res, next) => {
  let currentUserRole = req.myUser.role;
  if (currentUserRole !== "admin") {
    throw new ErrorHandler(
      `unauthorized access,${currentUserRole} is not allowed to access this route`,
      401
    );
  }
  next();
});

module.exports = { authorize };
