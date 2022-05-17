const orderSchema = require("../models/OrderSchema");


const deleteOrderById = (req, res) => {
  const id = req.params.id;
 
  console.log(req.body)
  orderSchema
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The order: ${id} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `order deleted`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = deleteOrderById;