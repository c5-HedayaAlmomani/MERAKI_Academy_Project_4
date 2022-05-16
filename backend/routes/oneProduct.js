const express = require("express") ;
const oneProductRouter = express.Router();

const getProdById = require("../controllers/getProdById")

oneProductRouter.get("/:id" , getProdById)

module.exports = oneProductRouter ;

//getProdById => http://localhost:5000/oneProduct/627d8f6e5fc2adb9a8fb8960    (get) 