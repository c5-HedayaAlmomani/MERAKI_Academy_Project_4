import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../App";

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
            <h>{e._id}</h>
            <br />
            <h>{e.productId._id}</h>
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
      {/* <button onClick={getAllProdect()}>HHHHHHHHHH</button> */}
    </div>
  );
};

export default Cart;
