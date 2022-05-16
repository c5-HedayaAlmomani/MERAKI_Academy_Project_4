const express = require("express") ;

const getCartById = require("../controllers/getCartById")
const authentication = require("../middleware/authentication")
const createNewCart = require("../controllers/createNewCart")
const upCartByUserId= require("../controllers/upCartByUserId")
const deletCart = require("../controllers/deleteCart")
const cartRouter = express.Router();

cartRouter.get("/",authentication , getCartById) ;

cartRouter.post("/" , authentication , createNewCart)

cartRouter.put("/" , authentication,upCartByUserId)
cartRouter.delete("/",  authentication,deletCart )

module.exports = cartRouter ;