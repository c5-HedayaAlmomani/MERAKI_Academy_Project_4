const userSchema = require("../models/userSchema");

const register = (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  const user = new userSchema({
    username,
    email,
    password,
    isAdmin,
  });
  user
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.json({ success: false, message: "The email already exists" });
      } else {
        res.json(err);
      }
    });
};

module.exports = register;
