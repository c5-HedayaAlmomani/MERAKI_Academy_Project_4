import { GoogleLogin } from "react-google-login";

const LoginGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
export default LoginGoogle;
