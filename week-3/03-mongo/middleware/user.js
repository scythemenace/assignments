const { User } = require("../db/index.js");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  let userExists = await User.findOne({
    username: username,
    password: password,
  });
  if (userExists) {
    return next();
  }
  res.status(404).json({
    message: "User doesn't exist",
  });
}

module.exports = userMiddleware;
