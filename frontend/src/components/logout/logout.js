import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  localStorage.clear();

  setIsLoggedIn(false);
  navigate("/");
};

export default Logout;
