import React from "react";
import "./Thanks.css";
import Checkmark from "../assets/images/checkmark.png";
import { useNavigate } from "react-router-dom";

function Thanks() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/home";
    navigate(path);
  };

  return (
    <div className="center">
      <img src={Checkmark} alt="Image" />
      <h1>Thank you!</h1>
      <p>INTRVST received your request.</p>
    </div>
  );
}

export default Thanks;
