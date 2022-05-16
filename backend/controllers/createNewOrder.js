const orderSchema = require("../models/OrderSchema");
const createNewOrder = (req, res) => {
  const { cartId, address } = req.body;
  const userId = req.token.id;

  const order = new orderSchema({
    cartId,

    address,
    userId,
  });
  order
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Order Created Successfully",
        order: result,
      });
    })
    .catch((err) => {
      res.json({
        message: "Server Error",
        Error: err,
      });
    });
};

module.exports = createNewOrder;
