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
      res.json({success: true, message: "You are logged in successfully" , result:result});
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.json({ success: false, message: "The email already exists" });
      }
      if(err.message.includes('Cast to Boolean')){
res.json({success: false, message:"IsAdmin must be true or false"})
      }
      
      
      else {
        res.json({success: false, message:"Server Error" ,err:err});
      }
    });
};

module.exports = register;
