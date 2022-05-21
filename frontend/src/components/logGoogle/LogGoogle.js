import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";
const LogGoogle = () => {
  let { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const Navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);

    axios
      .post("http://localhost:5000/login/google", {
        username: response.Lu.tf,
        email: response.Lu.Bv,
      })
      .then((result) => {
        console.log(result);
        console.log(result.data.token);
        setToken(result.data.token);
        localStorage.setItem("token", result.data.token);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <GoogleLogin
        clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LogGoogle;
