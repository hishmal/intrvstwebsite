import React from "react";
import "./Hero.css";
import { BsArrowDown } from "react-icons/bs";
import logo from "../../components/assets/images/Logo.png";
import Typed from "react-typed";

function Hero() {
  const scrollDown = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <img src={logo} alt="Logo" className="logo" />
      <div className="animated-typing">
        <Typed
          style={{ textAlign: "center", display: "flex" }}
          className="h1"
          strings={[
            "Investing in our Future.",
            "Protecting our World.",
            "INTRVST",
            "INTRVST Healthcare",
            "INTRVST Energy",
            "INTRVST Agriculture",
            "INTRVST Finance",
            "INTRVST Edge Computing",
            "INTRVST Commercial Foods",
          ]}
          typeSpeed={105}
          backSpeed={70}
          loop
        />
      </div>

      <p>
        You have reached the INTRVST contact approval page. Please provide the
        following information and you will be contacted with credentials for
        entry into the INTRVST company website. Thank you!
      </p>
      <span className="arrow-down">
        <BsArrowDown
          size={35}
          style={{
            color: "#fff",
            opacity: "0.7",
            cursor: "pointer",
          }}
          onClick={scrollDown}
        ></BsArrowDown>
      </span>
    </div>
  );
}

export default Hero;
