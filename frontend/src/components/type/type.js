import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
import { useNavigate } from "react-router-dom";
const Type = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState([]);
  const { type } = useParams();

  const func = () => {
    axios
      .get(`http://localhost:5000/type/${type}`)
      .then((result) => {
        setNewProduct(result.data);
     
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(func, [newProduct]);
  return (
    <div className="typeOnee" >
      {newProduct.map((e) => {
        return <div >
          <div onClick={()=>{
navigate(`/oneProduct/${e._id}`);
          }}>
          <img className="imgT" src={`${e.img}` + ""} />
         <div className="in">
          <h>{e.title}</h>
         
          </div>
          </div>
        </div>;
      })}

      <h>hello</h>

      <h>{type}</h>
    </div>
  );
};

export default Type;
