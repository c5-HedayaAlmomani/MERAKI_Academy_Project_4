const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = (req, res) => {
  // res.json("hello from login ")
  const { email, password } = req.body;

  userSchema
    .find({ email: email })
    .then((result) => {
      const hasspass = result[0].password;

      bcrypt.compare(password, hasspass, (err, result2) => {
        // The password and email are correct
        if (result2 == true) {
          // create token :

          const id = result[0]._id;
          const username = result[0].username;
          const email = result[0].email;
          const isAdmin = result[0].isAdmin;
          const payload = {
            id: id,
            username: username,
            email: email,
            isAdmin: isAdmin,
          };
          const secret = process.env.SECRET;
          const options = { expiresIn: "6000m" };

          const token = jwt.sign(payload, secret, options);

          res.status(200).json({
            success: true,
            message: "login successfully",
            token: token,
          });
        }
        //the password is incorrect
        else {
          res.status(403).json({
            success: false,
            message: "the password is incorrect",
          });
        }
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "the email is incorrect",
      });
    });
};
module.exports = login;
