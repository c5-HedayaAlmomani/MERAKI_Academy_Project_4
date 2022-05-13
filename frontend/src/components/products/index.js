import React, { useState, useEffect, useContext } from "react";
import "../productByCategory/style.css";
import axios from "axios";

import { UserContext } from "../../App";

const Product = () => {
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
    <div className="product">
      {products.map((e, i) => {
        return (
          <div className="oneProduct">
            <img className="img" src={`${e.img}` + ""} />
            {e.title}
            <h>{e.description}</h>
            <h>{e.categories}</h>
            <h>{e.price}</h>

            {e.color.map((element) => {
              return <h>{element}</h>;
            })}
            {e.size.map((element) => {
              return <h>{element}</h>;
            })}
            {/* <img src={element.img}  /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Product;
