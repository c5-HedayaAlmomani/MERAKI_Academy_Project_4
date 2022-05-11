const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products Model",
      },
      quantity: { type: Number,default:1  }
    },
  ],

  address: { type: Object, required: true },
});

module.exports = mongoose.model("Order Model", orderSchema);
