const cartSchema = require("../models/CartSchema");
const getCartById = (req, res) => {
  const id = req.user.id;
  const products = req.body.products;

  cartSchema
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getCartById;
