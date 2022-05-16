import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../App";

const Cart = () => {
  let [arrOfPoducts, setarrOfPoducts] = useState([]);
  let { token, setToken } = useContext(UserContext);

  //!====================

  const getCarts = () => {
    axios
      .get("http://localhost:5000/cart", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setarrOfPoducts(result.data);
        // console.log(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getCarts, []);
  //!=====================

  return (
    <div>
      <h5>CART</h5>;
      {arrOfPoducts.map((e) => {
        return (
          <div>
            <img className="img" src={`${e.productId.img}` + ""} />
            <h>{e.productId.title}</h>
            <h>{e.productId.description}</h>
            <h>{e.productId.color}</h>
            <h>{e.productId.type}</h>
            <h>{e.productId.size}</h>
            <h>{e.productId.title}</h>
            <h>{e.quantity}</h>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
