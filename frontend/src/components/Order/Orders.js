import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./style.css";

import { UserContext } from "../../App";

const Order = () => {
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [orderArr, setOrderArr] = useState([]);
  const [total, setTotal] = useState(0);

  let [x, setX] = useState(0);
  const getOrder = () => {
    axios
      .get("http://localhost:5000/order", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result.data);
        setOrderArr(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getOrder, []);
  //!==================
  const deleteOrder = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/order/${id}`, { id: id })
      .then((result) => {
        console.log(result);
        getOrder();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //!==================

  return (
    <div className="comp">
       <h1 className="myCart"> MY ORDERS</h1>
    
      {orderArr.map((e) => {
        return (
          <div className="cart_order">
            <img className="imgc" src={e.cartId.productId.img} />
            <div className="information">
              <h1>{e.cartId.productId.title}</h1>
              <h3>{e.cartId.productId.description}</h3>
              <h3>{"Price: "+e.cartId.productId.price}</h3>
              <h3>{"Color:  "+e.cartId.color}</h3>
              <h3>{"Size:  "+e.cartId.size}</h3>
              <button
                onClick={() => {
                  deleteOrder(e._id);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}

      <div>
        {orderArr.forEach((e) => {
          x =
            x +
            (total +
              Math.floor(
                e.cartId.productId.price[0] + e.cartId.productId.price[1]
              ));
        })}

        <h1 className="totalPrice">{"Total Price :" + x + " $"}</h1>
      </div>
    </div>
  );
};

export default Order;
