const productSchema = require("../models/ProductSchema");

const getProdById = (req, res) => {
    
  const id = req.params.id;

  productSchema
    .find({
     _id:id
    })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json({ message: "Server Error", error: err });
    });
};

module.exports = getProdById;
