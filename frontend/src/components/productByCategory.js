import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProByCat = () => {
  let [productsC, setProductsC] = useState([]);
  const { category } = useParams();

  // func for git product By category

  const func = () => {
    axios
      .get(`http://localhost:5000/product/${category}`)
      .then((result) => {
        setProductsC(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(func, [{ category }]);

  return (
    <div>
      {productsC.map((e, i) => {
        return <div>{e.title}
        <img src={"./"} alt="icons" />
        </div>;
      })}
    </div>
  );
};

export default ProByCat;

//!======================================
