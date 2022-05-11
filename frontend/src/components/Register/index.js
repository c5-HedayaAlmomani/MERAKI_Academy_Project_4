import axios from "axios";

import React, { useState, Link } from "react";

const Register = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setisAdmin] = useState("");
  const [message, setMessage] = useState();

  return (
    <div>
      <div className="div">
        <fieldset className="bordersignup">
          <legend>SIGN_UP</legend>
          <label>Enter your name</label>
          <br />
          <input
            placeholder="User Name"
            className="uname"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <br />
          <label>Enter your email</label>
          <br />
          <input
            placeholder="Email"
            className="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label>Enter your Password</label>
          <br />
          <input
            placeholder="Password"
            className="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <br />
          <label>Register as a Admin</label>
          <br />
          <input
            placeholder="Is Admin"
            className="isAdmin"
            onChange={(e) => {
              setisAdmin(e.target.value);
            }}
          />

          <br />
          <button
            className="button"
            onClick={() => {
              axios
                .post(
                  "http://localhost:5000/user",
                  {
                    username,

                    email,

                    password,

                    isAdmin,
                  },
                  {}
                )
                .then((result) => {
                  setMessage(result.data.message);
                  console.log(result.data);
                })
                .catch((err) => {
                  setMessage(err.data.message);
                  console.log(err.data);
                });
            }}
          >
            Register
          </button>
          <p className="message">{message}</p>
        </fieldset>
      </div>
    </div>
  );
};
export default Register;
