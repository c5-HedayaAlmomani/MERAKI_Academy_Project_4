import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, createContext } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
//316035579106-l7ggpdms4a6gtidqhujchl36u2qbdv0s.apps.googleusercontent.com
function App() {
  const Navigate = useNavigate();

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
