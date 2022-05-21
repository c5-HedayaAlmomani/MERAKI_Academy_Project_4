const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Import Routers
// user router
const userRouter = require("./routes/user");

app.use("/user", userRouter);
//login router
const loginRouter = require("./routes/login");

app.use("/login", loginRouter);
// product router
const productRouter = require("./routes/product")
app.use("/product" , productRouter)
// order router 
const orderRouter = require("../backend/routes/order")
app.use("/order" , orderRouter)

// cart router
const cartRouter = require("../backend/routes/cart")
app.use("/cart" , cartRouter)

// one product router
const oneProductRouter = require("./routes/oneProduct")
app.use("/oneProduct" , oneProductRouter)
// type router 
const typeRouter = require ("../backend/routes/type")
app.use("/type" , typeRouter)
// Routes Middleware

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
