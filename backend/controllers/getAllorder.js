const OrderSchema = require("../models/OrderSchema");

const getAllorder = (req, res) => {
  const id = req.token.id;
  OrderSchema.find({ userId: id })
    .populate({
      path: "cartId",
      populate: {
        path: "productId",
      },
    })

    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getAllorder;
