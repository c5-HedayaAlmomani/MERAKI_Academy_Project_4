import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../navbar/style.css";
import Login from "../Login";
import Register from "../Register";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import Product from "../products";
import ProByCat from "../productByCategory/productByCategory";
import OneProduct from "../oneProduct/oneProduct";
import Cart from "../cart/cart";
import Order from "../Order/Orders";
import Home from "../home/home";
const Navbar = () => {
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const Navigate = useNavigate();
  //! category= women , men , baby , boys , girls

  localStorage.token ? setIsLoggedIn(true) : setIsLoggedIn(false);

  return (
    <div>
      <div className="navbar">
        <div className="section">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/product" className="link">
            Product
          </Link>
          <Link className="link" to="product/woman">
            Women
          </Link>
          <Link className="link" to="product/men">
            Men
          </Link>
          <Link className="link" to="product/baby">
            Baby
          </Link>
          <Link className="link" to="product/boys">
            Boys
          </Link>
          <Link className="link" to="product/girls">
            Girls
          </Link>
          {/* <Link className="link"  to="oneProduct/:id"> */}
          <Link className="link" to="/cart">
            cart
          </Link>
          <Link className="link" to="/order">
            Order
          </Link>

          {/* </Link> */}
        </div>
        <div className="section">
          {!isLoggedIn && (
            <Link className="link" to="/login">
              login
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/register" className="link">
              register
            </Link>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/product" element={<Product />} />

        <Route path="/product/:category" element={<ProByCat />} />
        <Route path="oneProduct/:id" element={<OneProduct />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Navbar;
