import React from "react";

import { topBarButtons } from "../utils/constants";
import "../css/Header.css";

// Images
import town from "../assets/town.png";
import people from "../assets/peoples.png";
import mobel from "../assets/mobel.png";
import background from "../assets/background.png";
import vector2 from "../assets/vector-two.png";
import vector1 from "../assets/vector-one.png";
import logo from "../assets/logo.png";
import bigCircle from "../assets/bigCircle.png";
import smallCircle from "../assets/smallCircle.png";

const Header = () => {

  return (
    <div className="header">
      <div className="nav">
        {!!topBarButtons && topBarButtons.map((btn, index) => (
          <button
            key={index}
            className={
              index !== topBarButtons.length - 1 ? "transparent-btn" : "red-btn"
            }
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="head">
        <p className="heading">Your awesome</p>
        <p className="heading">traffic permit</p>
        <p className="heading">consultant.</p>
        <button className="red-btn">
          GET STARTED
          <span className="arrow">→</span>
        </button>
      </div>
      <img className="main-backgr" src={town} alt="town" />
      <div className="backgr">
        <img className="backgr2" src={background} alt="background" />
        <img className="vector2" src={vector2} alt="rock" />
        <img className="vector1" src={vector1} alt="rock" />
        <img className="logo" src={logo} alt="logo" />
        <img className="bigCircle" src={bigCircle} alt="big Circle" />
        <img className="smallCircle" src={smallCircle} alt="small Circle" />
        <img className="people" src={people} alt="people" />
        <img className="top-car" src={mobel} alt="top car" />
      </div>
    </div>
  );
};

export default Header;
