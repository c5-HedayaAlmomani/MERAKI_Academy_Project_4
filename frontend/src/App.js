import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, createContext } from "react";
export const UserContext = createContext();
function App() {
  //! access to token from local storge
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  //! isLoggedIn variable
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <UserContext.Provider
        value={{ token, setToken, isLoggedIn, setIsLoggedIn }}
      >
        <Navbar />
      </UserContext.Provider>
    </div>
  );
}

export default App;
