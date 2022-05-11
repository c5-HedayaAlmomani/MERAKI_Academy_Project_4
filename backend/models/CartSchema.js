const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },

  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products Model",
      },
      quantity: { type: Number , default:1 }, 
    },
  ],
});

module.exports = mongoose.model("Cart Model", cartSchema);
