const cartSchema = require("../models/CartSchema");

const getCartById = (req, res) => {
  const id = req.token.id;
  

  cartSchema
    .find({ userId: id })
    .populate("productId")
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getCartById;
