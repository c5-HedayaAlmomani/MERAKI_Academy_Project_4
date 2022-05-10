const express = require("express");

const userRouter = express.Router();

const register = require("../controllers/register");

userRouter.post("/", register);

module.exports = userRouter;
