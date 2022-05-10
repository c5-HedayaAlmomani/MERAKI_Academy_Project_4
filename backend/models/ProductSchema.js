const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
  categories: { type: String },
  size: [{ type: String }],
  color: [{ type: String }],
  price: { type:String },
});

module.exports = mongoose.model("Products Model" , productSchema)