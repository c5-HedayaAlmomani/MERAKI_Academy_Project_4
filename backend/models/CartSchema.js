const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User Model" },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products Model" , required:true , unique:true
  },
  quantity: { type: Number, default: 1 },
color :{type:String , }
  //total
});

module.exports = mongoose.model("Cart Model", cartSchema);
