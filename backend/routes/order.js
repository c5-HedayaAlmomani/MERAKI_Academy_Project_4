

const express = require("express")
const createNewOrder = require("../controllers/createNewOrder")
const authentication = require("../middleware/authentication")
const getAllorder = require("../controllers/getAllorder")
const updateOrderById = require("../controllers/updateOrderById")
const deleteOrderById = require("../controllers/deleteOrderById")
const orderRouter = express.Router();

orderRouter.post("/",authentication , createNewOrder);
orderRouter.get("/",authentication , getAllorder)
orderRouter.put("/:id" ,authentication, updateOrderById)
orderRouter.delete("/:id" , deleteOrderById )

module.exports = orderRouter ;


// http://localhost:5000/order  post   createNewOrder
// http://localhost:5000/order  get   getAllorder
// http://localhost:5000/order/627aaedcaf8c1eb3ecd28fd8   put  updateOrderById
// http://localhost:5000/order/627aafa435d44635aabd339  delete  deleteOrderById