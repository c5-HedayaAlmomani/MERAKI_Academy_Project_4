const express = require("express") ;

const getCartById = require("../controllers/getCartById")
const authentication = require("../middleware/authentication")
const createNewCart = require("../controllers/createNewCart")

const cartRouter = express.Router();

cartRouter.get("/",authentication , getCartById) ;

cartRouter.post("/" , authentication , createNewCart)

module.exports = cartRouter ;