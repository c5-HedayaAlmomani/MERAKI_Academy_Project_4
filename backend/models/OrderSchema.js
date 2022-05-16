
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type:mongoose.Schema.Types.ObjectId , ref:"User Model" , required: true },

  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart Model",
  },
 
  address: { type: Object,  },
});

module.exports = mongoose.model("Order Model", orderSchema);
