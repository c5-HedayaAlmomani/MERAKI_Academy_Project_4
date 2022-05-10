
const productSchema = require("../models/ProductSchema")
const deleteProductById = (req , res)=>{


        const id = req.params.id;
        productSchema
          .findByIdAndDelete(id)
          .then((result) => {
            if (!result) {
              return res.status(404).json({
                success: false,
                message: `The product: ${id} is not found`,
              });
            }
            res.status(200).json({
              success: true,
              message: `product deleted`,
            });
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: `Server Error`,
              err: err.message,
            });
          });
     
}

module.exports = deleteProductById