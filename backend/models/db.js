const mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect(process.env.DB_URI).then(
  () => {
    console.log("DB Ready To Use at project 4");
  },
  (err) => {
    console.log(err);
  }
);
