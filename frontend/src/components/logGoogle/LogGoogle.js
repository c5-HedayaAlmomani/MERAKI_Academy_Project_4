import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
const LogGoogle = () => {
  const Navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    //   console.log(response.Lu.tf);

    //   console.log(response.Lu.Bv);
    //   console.log(response.Lu.TW);
    //   console.log(response.Lu);

    //       username: response.Lu.tf,
    //       email: response.Lu.Bv,
    //       password: response.Lu.TW,
    //       isAdmin: false,
    //     }
  };

  return (
    <div>
      <GoogleLogin
        clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LogGoogle;
