const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User Model" },

  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products Model",
      },
      quantity: { type: Number, default: 1 },
    }
  ],
  //total
});

module.exports = mongoose.model("Cart Model", cartSchema);
