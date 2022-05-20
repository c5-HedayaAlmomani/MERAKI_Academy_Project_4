const userSchema = require("../models/userSchema");

const jwt = require("jsonwebtoken");

const loginGoogle = (req, res) => {
  const email = req.body.email;
  userSchema.find({ email: email }).then((result) => {
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
      token: token
    });
  }).catch((err)=>{
      res.json(err)
  })
};


module.exports = loginGoogle;
