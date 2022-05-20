const express = require("express");

const loginRouter = express.Router();

const login = require("../controllers/login");
const regGoogle = require("../middleware/regGoogle")
const loginGoogle = require("../controllers/LoginGoogle")
const authentication = require("../middleware/authentication");
const isAdmin = require("../middleware/isAdmin");

loginRouter.post("/",  login);

loginRouter.post("/google" ,regGoogle , loginGoogle)

module.exports = loginRouter;
