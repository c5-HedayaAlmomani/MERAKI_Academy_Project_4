import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

function App() {
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
      </UserContext.Provider>


      
      <div className="App"></div>
    </div>
  );
}

export default App;
