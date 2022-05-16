import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../navbar/style.css";
import Login from "../Login";
import Register from "../Register";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import Product from "../products";
import GetOreders from "../Order/Orders";
import ProByCat from "../productByCategory/productByCategory";
import OneProduct from "../oneProduct";
import Cart from "../cart/cart";
const Navbar = () => {
  
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const Navigate = useNavigate();
  //! category= women , men , baby , boys , girls

  localStorage.token ? setIsLoggedIn(true) : setIsLoggedIn(false);

  return (
    <div>
      {/* <div></div> */}

      <div className="navbar">
        <div className="section">

        {/* OneProduct */}
        {/* <OneProduct /> */}


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
          <Link  to="oneProduct/:id">
            <Link to="/cart">cart</Link>
           
          </Link>
        </div>
        <div className="section">
          {/* <GetOreders /> */}
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
        <Route path="oneProduct/:id" element={<OneProduct /> } />
        <Route path="/cart" element={< Cart />} ></Route>
      </Routes>
    </div>
  );
};

export default Navbar;
