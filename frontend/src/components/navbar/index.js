import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import Product from "../products";
import GetOreders from "../Orders"
import ProByCat from "../productByCategory"
const Navbar = () => {
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  //! category= women , men , baby , boys , girls




  return (
    <div>
      navbar
      {/* <Product /> */}
      < GetOreders/>
      {!isLoggedIn && (
        <Link to="/login" className="link">
          login
        </Link>
      )}
      {!isLoggedIn && (
        <Link to="/register" className="link">
          register
        </Link>
      )}
         {isLoggedIn && (
        <Link to="/product" className="link">
          Product
        </Link>
      )}
      
        <Link to="product/women">Women</Link>
        <Link to="product/men">Men</Link>
        <Link to="product/baby">Baby</Link>
        <Link to="product/boys">Boys</Link>
        <Link to="product/girls">Girls</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/product" element={<Product />} />

        <Route path="/product/:category" element={< ProByCat />} />
      </Routes>
    </div>
  );
};

export default Navbar;
