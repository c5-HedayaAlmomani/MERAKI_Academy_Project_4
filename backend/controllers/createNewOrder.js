const orderSchema = require("../models/OrderSchema");
const createNewOrder = (req, res) => {
  const { products, address } = req.body;
  const userId = req.user.id;

  const order = new orderSchema({
    products,

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
