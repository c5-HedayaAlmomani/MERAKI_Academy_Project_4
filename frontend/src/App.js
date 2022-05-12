import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, createContext } from "react";
import axios from "axios";
export const UserContext = createContext();

function App() {
  //! new for imges
  // const [image, setImage] = useState("");
  // const [url, setUrl] = useState("");
  // const uploadImage = () => {
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "fm1cwqab");
  //   data.append("cloud_name", "hudhud");
  //   axios
  //     .post("  https://api.cloudinary.com/v1_1/hudhud/image/upload", { data })
  //     .then((data) => {
  //       console.log(data);
  //       setUrl(data.url);
  //     })
  //     .catch((err) => console.log(err));
  // };
  //! new for imges
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
      //! new for imges
      {/* <div>
        <div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <button onClick={uploadImage}>Upload</button>
        </div>
        <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={url} />
        </div>
      </div> */}
      //! new for imges
    </div>
  );
}

export default App;

//!
