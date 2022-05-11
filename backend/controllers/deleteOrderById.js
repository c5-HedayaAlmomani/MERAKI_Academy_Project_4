const orderSchema = require("../models/OrderSchema");

const deleteOrderById = (req, res) => {
  const id = req.params.id;

  orderSchema.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.json("the id is not correct");
    }

    res.json("the order deleted");
  });
};
module.exports = deleteOrderById;
