import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, createContext } from "react";
import { GoogleLogin } from "react-google-login";
// import Map from "./components/map/map";

export const UserContext = createContext();
//316035579106-l7ggpdms4a6gtidqhujchl36u2qbdv0s.apps.googleusercontent.com
function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  //! access to token from local storge
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  //! isLoggedIn variable
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //? const [arrCart , setArrCart] = useState({products:[]})
  const [arrCart, setArrCart] = useState([]);
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          token,
          setToken,
          isLoggedIn,
          setIsLoggedIn,
          arrCart,
          setArrCart,
        }}
      >
        <Navbar />
        {/* <Map /> */}
        
      </UserContext.Provider>
      <GoogleLogin
        clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
        
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <div className="App"></div>
    </div>
  );
}

export default App;
