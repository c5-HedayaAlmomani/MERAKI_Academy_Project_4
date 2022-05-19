import axios from "axios";
import React, { useState, useContext, useEffect,Component } from "react";
import { UserContext } from "../../App";
import "./style.css"
//!£££££££££££££££££££££££££££££location

// import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';


const Cart = () => {
  let [arrOfPoducts, setarrOfPoducts] = useState([]);
  let { token} = useContext(UserContext);
  let [address, setAddress] = useState("");
  // let [arrProduct, setArrProduct] = useState([]);
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
 //?  npm install google-maps-react
  //!££££££££££££££££££££££££££££££££££ location
  const componentDidMount = () => {
    // if true I can access  geolocation properties
    if ("geolocation" in navigator) {
      console.log("Available");
// to get position properties 
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

  //!=====================

  return (
    <div>
      <h5>CART</h5>;
      {arrOfPoducts.map((e) => {
        return (
          <div className="cart">
            <img className="imgc" src={`${e.productId.img}` + ""} />
            <div className="information">
            <h2>{e.productId.title}</h2>
            <h5>{"Description: "+e.productId.description}</h5>
            <h5>{"Color: " + e.color}</h5>
            {/* <h5>{e.productId.type}</h5> */}
            <h5>{"Size:  " + e.size}</h5>
            
            <h5>{"Quantity:  " + e.quantity}</h5>

            <h3>Location: </h3><input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <br />
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
          </div>
        );
      })}
      
      <button
      
      >
        location
      </button>
    </div>
  );
};

export default Cart;
