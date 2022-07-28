const  orderSchema= require("../models/OrderSchema")
const updateOrderById = (req ,res)=>{

    
        const id = req.params.id;
      
        orderSchema
          .findByIdAndUpdate(id, req.body, { new: true })
          .then((result) => {
            if (!result) {
              return res.status(404).json({
                success: false,
                message: `The order: ${id} is not found`,
              });
            }
            res.status(202).json({
              success: true,
              message: `order updated`,
              order: result,
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
module.exports = updateOrderById ;