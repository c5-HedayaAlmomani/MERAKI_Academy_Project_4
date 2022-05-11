const OrderSchema = require("../models/OrderSchema");

const getAllorder = (req, res) => {
  const id = req.user.id;
  OrderSchema.find({ userId: id }).populate('products.productId')
    
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getAllorder;
