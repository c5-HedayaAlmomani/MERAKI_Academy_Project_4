import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

import { UserContext } from "../../App";

const Product = () => {
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [products , setProducts]= useState([]);

  const getAllProdect = async () => {
    try {
      const result = await axios.get("http://localhost:5000/product", {
        headers: {
          authorization: "bearer " + token,
        },
      });

      // console.log(result.data.products);
      setProducts(result.data.products)
      console.log(result.data.products)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProdect();
  }, []);

return <div>
{products.map((e , i)=>{

return <div><h>{e.title}</h>
<h>{e.description}</h>
<h>{e.categories}</h>
<h>{e.price}</h>

{e.color.map((element)=>{
  return <h>{element}</h>
})}
{e.size.map((element)=>{
  return <h>{element}</h>
})}
{/* <img src={element.img}  /> */}

</div>


})}


</div>




};

export default Product;
