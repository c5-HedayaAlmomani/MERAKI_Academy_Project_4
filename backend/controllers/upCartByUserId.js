const cartSchema = require("../models/CartSchema");
//update cart by user id
const upCartByUserId = (req, res) => {
  const id = req.token.id;

  cartSchema
    // .updateOne(
      .findOneAndUpdate(
      { userId: id },
      // {$push:{productId:req.body.productId}},
      {products : req.body.products},

      { new: true }
    )
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The cart :userid: ${id} is not found`,
          result: result,
        });
      }
      res.status(202).json({
        success: true,
        message: `cart updated`,
        cart: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = upCartByUserId;
