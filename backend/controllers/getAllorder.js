const OrderSchema = require("../models/OrderSchema");

const getAllorder = (req, res) => {
  const id = req.user.id;
  OrderSchema.find({ userId: id })
    .populate("products")
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getAllorder;
