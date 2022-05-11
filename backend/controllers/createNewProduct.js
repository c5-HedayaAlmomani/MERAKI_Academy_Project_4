const productSchema = require("../models/ProductSchema");
const createNewProduct = (req, res) => {
  const { title, description, img, categories,type, size, color, price } = req.body;
  const product = new productSchema({
    title, description, img, categories,type, size, color, price 
  });

 product
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `product created`,
        article: result,
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

module.exports = createNewProduct;
