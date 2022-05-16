const cartSchema = require("../models/CartSchema");
const createNewCart = (req, res) => {
  const userId = req.token.id;

  const productId = req.body.productId;
  const quantity = req.body.quantity;
  const color = req.body.color;
  const size = req.body.size
  const cart = new cartSchema({
    userId: userId,
    productId: productId,
    quantity: quantity,
    color: color,
    size:size
  });
  cart
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = createNewCart;
