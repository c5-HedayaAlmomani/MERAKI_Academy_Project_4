import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../productByCategory/style.css";
import { useNavigate } from "react-router-dom";

// import m from "../productByCategory/r.jpeg";

const ProByCat = () => {
  const navigate = useNavigate();
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
  //!======================

  //!======================

  return (
    <div className="products">
      {productsC.map((e, i) => {
        return (
          <div className="oneProduct">
            <img
              className="allimg"
              src={`${e.img}` + ""}
              onClick={() => {
                navigate(`/oneProduct/${e._id}`);
              }}
            />
            <h>{e.title}</h>

            <h>{e.description}</h>
          </div>
        );
      })}
    </div>
  );
};

export default ProByCat;

//!======================================
