import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";

const OneProduct = () => {
  const [newProduct, setNewProduct] = useState([]);

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
    let found = false;
    arrCart.forEach((element) => {
      if (p._id == element.productId) {
        found = true;
      }
    });
    if (!found) {
      setArrCart([...arrCart,p]);

    }
// console.log(arrCart);
    axios
      .put(
        "http://localhost:5000/cart",
        { products: arrCart },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        console.log(result).catch((err) => {
          console.log(err);
        });
      });
  };

  //!=====================

  return (
    <div>
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
                  title: e.title,
                  description: e.description,
                  img: e.img,
                  type: e.type,
                  categories: e.categories,
                  size: e.sive,
                  color: e.color,
                  price: e.price,
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
