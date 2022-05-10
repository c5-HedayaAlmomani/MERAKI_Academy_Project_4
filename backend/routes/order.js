

const express = require("express")
const createNewOrder = require("../controllers/createNewOrder")
const authentication = require("../middleware/authentication")
const getAllorder = require("../controllers/getAllorder")
const updateArticleById = require("../controllers/updateOrderById")
const deleteOrderById = require("../controllers/deleteProductById")
const orderRouter = express.Router();

orderRouter.post("/",authentication , createNewOrder);
orderRouter.get("/",authentication , getAllorder)
orderRouter.put("/" ,authentication, updateArticleById)
orderRouter.delete("/:" ,authentication, deleteOrderById )

module.exports = orderRouter ;