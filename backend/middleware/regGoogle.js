const userSchema = require("../models/userSchema");
const regGoogle = (req, res, next) => {
  const { username, email } = req.body;
  let password = Math.random();
  let isAdmin = false;
  const user = new userSchema({
    username,
    email,
    password,
    isAdmin,
  });
  user
    .save()
    .then((result) => {
      console.log({
        success: true,
        message: "You are logged in successfully",
        result: result,
      });
      next();
    })
    .catch((err) => {
      next();
    });
};
module.exports = regGoogle;
