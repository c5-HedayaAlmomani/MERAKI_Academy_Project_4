const express = require("express");

const loginRouter = express.Router();

const login = require("../controllers/login");
const authentication = require("../middleware/authentication");
const isAdmin = require("../middleware/isAdmin");

loginRouter.post("/",  login);

module.exports = loginRouter;
