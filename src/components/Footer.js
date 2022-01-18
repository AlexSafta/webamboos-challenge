import React from "react";

import Form from "./Form";
import { topBarButtons } from "../utils/constants";
import "../css/Footer.css";

import logo from "../assets/logo.png";
import background from "../assets/bottom-backgr-two.png";
import bottomCar from "../assets/bottom-car.png";
import vector from "../assets/vector-footer.png";
import vector2 from "../assets/vector-two-footer.png";
import backgroundDetails from "../assets/bottom-backgr.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom-car-section">
        <img src={vector} className="footer-vector" alt="rock" />
        <img src={bottomCar} className="bottom-car" alt="small car" />
        <img src={vector2} className="footer-vector2" alt="rock" />
      </div>
      <div className="footer-content">
        <div className="footer-description">
          <p>
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </p>
        </div>
        <Form />
      </div>
      <div className="background-section">
        <img
          src={background}
          className="footer-backgr"
          alt="footer background"
        />
        <img
          src={backgroundDetails}
          className="footer-details"
          alt="footer background detalis"
        />
      </div>
      <div className="footer-nav">
        <img src={logo} alt="logo" />
        <div className="buttons">
          {!!topBarButtons &&
            topBarButtons.map((btn, index) => {
              if (index !== topBarButtons.length - 1) {
                return (
                  <button key={index} className="transparent-btn">
                    {btn}
                  </button>
                );
              } else return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
