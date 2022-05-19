import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../../App";
import "./style.css";

const OneProduct = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const { id } = useParams();
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

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

  //!========================

  return (
    <div >
      {newProduct.map((e) => {
        return (
          <div className="onePro">
           <div className="imgp"> <img  src={`${e.img}` + ""} /></div>
            <div className="info">
              <h>{e.title}</h>
              <h5>{"Description: "+e.description}</h5>
              <h5>{e.type}</h5>
              <h5>{e.price}</h5>
              <h>Color : </h>
              <select
                onChange={function (e) {
                  setColor(e.target.value);
                }}
              >
                {e.color.map((element) => {
                  return <option value={element + ""}>{element}</option>;
                })}
              </select>
              <br />
              {/* //!==================== */}
              <h className="ll">{"Size :" }</h>
              <select
                onChange={function (e) {
                  setSize(e.target.value);
                }}
              >
                {e.size.map((element) => {
                  return <option value={element + ""}>{element}</option>;
                })}
              </select>
              <br />
              {/* //!   هون رح اسويها  */}
              <div className="quantity">
              <button onClick={reduceQuantity}>-</button>
              <>{"quantity: " + quantity}</>
              <button onClick={addQuantity}>+</button>
              </div>
              <br />
              <button className="button"
                onClick={() =>
                  addToCart({
                    productId: e._id,
                    quantity: quantity,
                    color: color,
                    size: size,
                  })
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OneProduct;
