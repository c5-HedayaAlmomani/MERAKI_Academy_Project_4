import img from "./imggggg.jpg"
import imgShous from "./shous.webp"
import imgPants from "./pants.jpg"
import imgShirt from "./shirt.jpg"
import imgDresses from "./dresses.jpg"
import imgTop from "./top.jpg"
import imgBags from "./bags.jpg"
import imgBaby from "./baby.webp"
import imgSuit from "./suit.webp"
import { useNavigate } from "react-router-dom";
import Product from "../products";
import "./style.css"
const Home = ()=>{
    const navigate = useNavigate();
    return  <div><img className="backGround" src={img}/> 
    <h1 className="head">All Categories</h1>
   
    <div className="total">
<div className="allbox">
<div className="box" onClick={()=>{
          navigate("/type/shous");
      }}>
<img src={imgShous} />
<h>SHOUS</h>

</div>

<div className="box" onClick={()=>{
          navigate("/type/pants");
      }}>
<img src={imgPants} />
<h>PANTS</h>

</div>

<div className="box" onClick={()=>{
          navigate("/type/shirt");
      }}>
<img src={imgShirt} />
<h>SHIRT</h>

</div>

<div className="box" onClick={()=>{
          navigate("/type/dresses");
      }}>
<img src={imgDresses} />
<h>DRESSES</h>

</div>

<div className="box" onClick={()=>{
          navigate("/type/top");
      }}>
<img src={imgTop} />
<h>TOP</h>

</div>

<div className="box" onClick={()=>{
          navigate("/type/bags");
      }}>
<img src={imgBags} />
<h>BAGS</h>

</div>

<div className="box" onClick={()=>{
          navigate("/type/baby");
      }}>
<img src={imgBaby} />
<h>BABY</h>

</div>

<div className="box" onClick={()=>{
          navigate("/type/Suit");
      }}>
<img src={imgSuit} />
<h>SUIT</h>

</div>

</div>

</div>
<h1 className="headd">All Products</h1>
<Product />

      
  
    </div>
}
export default Home ;