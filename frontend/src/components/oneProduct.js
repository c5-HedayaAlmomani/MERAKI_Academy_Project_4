import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";

const OneProduct = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();
  let { arrCart, setArrCart, token, setToken, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);

  const func = () => {
    axios
      .get(`http://localhost:5000/oneProduct/${id}`)
      .then((result) => {
        setNewProduct(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(func, []);
  //!=======================
  const addToCart = (p) => {
    // console.log(p)
    axios
      .post("http://localhost:5000/cart", p, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const reduceQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  //!=======================

  return (
    <div>
      <button onClick={reduceQuantity}>-</button>

      <button onClick={addQuantity}>+</button>
      {"quantity: " + quantity}
      {newProduct.map((e) => {
        return (
          <div className="oneProduct">
            <img className="img" src={`${e.img}` + ""} />
            {e.title}
            <h>{e.type}</h>
            {/* //!   هون رح اسويها  */}
            <button
              className="addCart"
              onClick={() =>
                addToCart({
                  productId: e._id,
                  "quantity":quantity
                })
              }
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default OneProduct;
