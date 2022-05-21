import React, { useState, useEffect, useContext } from "react";
import "../productByCategory/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Product = () => {
  const navigate = useNavigate();
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  const getAllProdect = async () => {
    try {
      const result = await axios.get("http://localhost:5000/product", {
        headers: {
          authorization: "bearer " + token,
        },
      });

      // console.log(result.data.products);
      setProducts(result.data.products);
      console.log(result.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProdect();
  }, []);

  return (
    <div className="products">
      {products.map((e, i) => {
        return (
          <div
            className="oneProduct"
            onClick={() => {
              navigate(`/oneProduct/${e._id}`);
            }}
          >
            <img className="allimg" src={`${e.img}` + ""} />
            <h>{e.title}</h>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
