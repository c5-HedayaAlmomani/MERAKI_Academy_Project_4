const productSchema = require("../models/ProductSchema");

const getProdCategory = (req, res) => {
  const category = req.params.category;

  productSchema
    .find({
      categories: `${category}`,
    })
    .then((product) => {
      if (product.length == 0) {
        res.json("There are no products for this category");
      } else {
        res.json(product);
      }
    })
    .catch((err) => {
      res.json({ message: "Server Error", error: err });
    });
};

module.exports = getProdCategory;
