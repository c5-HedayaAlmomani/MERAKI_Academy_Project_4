const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true},
  password: { type: String, required: true },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
//! process.env.SALT بدي اسأل عنها
userSchema.pre("save", async function () {
  const hasspass = await bcrypt.hash(this.password, 10);



  this.password = hasspass;
});

module.exports = mongoose.model("User Model", userSchema);
