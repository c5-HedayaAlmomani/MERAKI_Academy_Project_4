const express = require("express")

const tootRouter = express.Router();

const createNewProduct = require("../controllers/createNewProduct")

tootRouter.post("/" , createNewProduct)

module.exports = tootRouter ;