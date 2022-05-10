const productSchema = require("../models/ProductSchema");
const getAllProduct = (req, res) => {
  productSchema
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "All the products",
        products: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Erro",
        error: err,
      });
    });
};

module.exports = getAllProduct;
