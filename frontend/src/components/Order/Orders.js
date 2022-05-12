import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App"
const GetOreders = () => {
  const GetAllOrders = async () => {
    let token = useContext(UserContext).token;
    try {
      const result = await axios.get("http://localhost:5000/order", {
        headers: {
          authorization: "Bearer " + token,
        },
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <GetAllOrders /> */}
    </div>
  );
};

export default GetOreders;
