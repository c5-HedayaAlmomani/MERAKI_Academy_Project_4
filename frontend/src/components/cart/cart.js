import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../App";
//!++++++++++
// import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const Cart = () => {
  let [arrOfPoducts, setarrOfPoducts] = useState([]);
  let { token, setToken } = useContext(UserContext);
  let [address, setAddress] = useState("");
  let [arrProduct, setArrProduct] = useState([]);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getCarts, []);
  //!=====================
  const addOrder = (p) => {
    axios
      .post("http://localhost:5000/order", p, {
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

  //!=====================
  const deleteCart = (id) => {
    axios
      .delete(`http://localhost:5000/cart/${id}`, {
        headers: { authorization: "Bearer " + token },
      })
      .then((result) => {
        console.log(result);
        getCarts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //!=====================
  // const getAllProdect = () => {
  //   axios
  //     .get("http://localhost:5000/product", {
  //       headers: {
  //         authorization: "bearer " + token,
  //       },
  //     })
  //     .then((result) => {
  //       console.log(result.data.products);
  //       setArrProduct(result.data.products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  //!=====================
  const componentDidMount = () => {
    // if true I can access  geolocation properties
    if ("geolocation" in navigator) {
      console.log("Available");

      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log(position);
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      console.log("Not Available");
    }
  };
  //!=====================

  return (
    <div>
      <h5>CART</h5>;
      {arrOfPoducts.map((e) => {
        return (
          <div>
            <img className="img" src={`${e.productId.img}` + ""} />
            <h5>{e.productId.title}</h5>
            <h5>{e.productId.description}</h5>
            <h5>{"color" + e.color}</h5>
            <h5>{e.productId.type}</h5>
            <h5>{"size:  " + e.size}</h5>
            <h5>{e.productId.title}</h5>
            <h5>{"quantity:  " + e.quantity}</h5>

            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <button
              onClick={() => {
                addOrder({
                  cartId: e._id,

                  userId: e.userId,
                  address: address,
                });
              }}
            >
              ADD ORDER
            </button>
            <button
              onClick={() => {
                deleteCart(e._id);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          componentDidMount();
        }}
      >
        location
      </button>
    </div>
  );
};

export default Cart;
