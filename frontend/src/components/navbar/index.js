
import {Routes , Route , Link , useNavigate} from "react-router-dom"
import Login from "../Login";
import Register from "../Register";
import React, { useContext } from "react";
import { UserContext } from "../../App"

const Navbar =()=>{


    let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);



 

//! category= women , men , baby , boys , girls 

    return <div>
         {/* <Link to={`/products/${category}`}>
    
    </Link> */}
        navbar


        {!isLoggedIn && (
            <Link to="/login" className="link">
              login
            </Link>
          )}

{!isLoggedIn && (
            <Link to="/register" className="link">
              register
            </Link>
          )}


{/* 
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/baby">Baby</Link>
        <Link to="boys">Boys</Link>
        <Link to="/girls">Girls</Link> */}


<Routes>
{/* <Route path="/women" element={}></Route> */}
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

</Routes>



    </div>










}

export default Navbar ;