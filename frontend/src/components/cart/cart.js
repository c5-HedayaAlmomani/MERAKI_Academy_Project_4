import axios from "axios";
import React, { useState, useContext } from "react";
import { UserContext } from "../../App";

const Cart = () => {
  let [arrOfPoducts , setarrOfPoducts] = useState([]);
  let {  token, setToken,} =
  useContext(UserContext);
  

const getCarts = ()=>{
  
  axios.get("http://localhost:5000/cart" , {headers:{
    authorization:"Bearer "+token
  }}).then((result)=>{
    setarrOfPoducts(result.data[0].products)
    // console.log(result.data[0].products)
    // console.log(result.data[0].products.quantity)
// console.log(arrOfPoducts);





  }).catch((err)=>{
    console.log(err)
  })
}





  return <div>
  <h5>CART</h5>;
  {arrOfPoducts.map((e)=>{
    return ( <div><h>{e.productId.title}</h>
    <img className="img" src={`${e.productId.img}` + ""} />
    <h>{e.productId.title}</h>
    <h>{e.productId.description}</h>
    <h>{e.productId.color}</h>
    <h>{e.productId.type}</h>
    <h>{e.productId.size}</h>
    </div>
    )
  })}
  <button onChange={getCarts()}>getttt</button>

  </div>


};

export default Cart;
