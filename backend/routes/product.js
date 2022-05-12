const createNewProduct = require("../controllers/createNewProduct");
const getAllProduct = require("../controllers/getAllProduct");
const deleteProductById = require("../controllers/deleteProductById");
const getProdCategory = require("../controllers/getProdCategory");
const express = require("express");
const isAdmin = require("../middleware/isAdmin");
const authentication = require("../middleware/authentication");

//! =============================================

const productRouter = express.Router();

productRouter.post(
  "/",
  
  authentication,
  isAdmin,
  createNewProduct
);
productRouter.get("/", getAllProduct);
productRouter.delete("/:id", deleteProductById);
productRouter.get("/:category", getProdCategory);

module.exports = productRouter;

// createNewProduct => http://localhost:5000/product  (post)
// getAllProduct =>  http://localhost:5000/product (get)
// deleteProductById=>  http://localhost:5000/product/627a5bcd0a0fdc69c6426230  (delet)
// getProdCategory =>  http://localhost:5000/product/Men (get)
