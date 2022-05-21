const express = require("express");
const getType = require("../controllers/getType");
const typeRouter = express.Router();
typeRouter.get("/:type", getType);
module.exports = typeRouter;
