const cartSchema = require("../models/CartSchema");
const createNewCart = (req, res) => {
  const userId = req.user.id;

  const products = req.body.products;

  const cart = new cartSchema({
    userId,
    products,
  })
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
