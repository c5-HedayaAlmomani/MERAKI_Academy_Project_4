import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProByCat = () => {
  const [productsC, setProductsC] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${category}`)
      .then((result) => {
          console.log("===========================")
        console.log(result);
        setProductsC(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{category}</div>;
};

export default ProByCat;
