
// import "../Login/style.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const func = async () => {
    try {
      const result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      //! token
      token = result;
      setToken(result.data.token);
      localStorage.setItem("token", token);
      console.log(token);
      isLoggedIn = true;
      setIsLoggedIn(true);

      setMessage(result.data.message);
     
    } catch (error) {
      setMessage(error.response.data.message);
      throw error;
    }
  };

  return (
    <div className="div">
      <fieldset className="bordersignup">
      <legend>LOGIN</legend>
        <label >Enter Your Email</label><br />
        <input
          type="email"
          placeholder="Email"
          className="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label >Enter Your Password</label><br />
        <input
          type="password"
          placeholder="Password"
          className="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br />
        <button className="button_login" onClick={func}>
          Login
        </button>
        <br />
        <p className="message">{message}</p>
      </fieldset>
    </div>
  );
};

export default Login;