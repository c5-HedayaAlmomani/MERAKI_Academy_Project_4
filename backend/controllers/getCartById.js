const cartSchema = require("../models/CartSchema");

const getCartById = (req, res) => {
  const id = req.token.id;
  const products = req.body.products;

  cartSchema
    .find({userId
      :id}).populate('products.productId')
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getCartById;
