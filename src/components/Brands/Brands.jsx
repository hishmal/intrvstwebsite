import React from "react";
import "./Brands.css";
import boxImg1 from "../../components/assets/images/INTRVST Logo 1.png";
import boxImg2 from "../../components/assets/images/INTRVST Logo 2.png";
import boxImg3 from "../../components/assets/images/INTRVST Logo 3.png";
import boxImg4 from "../../components/assets/images/INTRVST Logo 4.png";
import boxImg5 from "../../components/assets/images/INTRVST Logo 5.png";
import boxImg6 from "../../components/assets/images/INTRVST Logo 6.png";

function Brands() {
  return (
    <div className="section brands" style={{ marginBlockStart: "100px" }}>
      <ul className="brands-list">
        <li>
          <div className="box box-1">
            <img src={boxImg1} alt="Logo" className="box-img bigger-img" />
          </div>
        </li>
        <li>
          <div className="box box-2">
            <img src={boxImg2} alt="Logo" className="box-img bigger-img left" />
          </div>
        </li>
        <li>
          <div className="box box-3">
            <img src={boxImg3} alt="Logo" className="box-img bigger-img " />
          </div>
        </li>
        <li>
          <div className="box box-4">
            <img src={boxImg4} alt="Logo" className="box-img bigger-img left" />
          </div>
        </li>
        <li>
          <div className="box box-5">
            <img src={boxImg5} alt="Logo" className="box-img" />
          </div>
        </li>
        <li>
          <div className="box box-6">
            <img src={boxImg6} alt="Logo" className="box-img" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Brands;
