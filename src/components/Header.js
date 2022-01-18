import React, { useEffect } from "react";

import { topBarButtons } from "../utils/constants";
import "../css/Header.css";

// Images
import town from "../assets/town.png";
import people from "./../assets/people.png";
import mobel from "../assets/mobel.png";
import background from "../assets/background.png";
import vector2 from "../assets/vector2.png";
import vector1 from "../assets/vector1.png";
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
      <img className="main-backgr" src={town} />
      <div className="backgr">
        <img className="backgr2" src={background} />
        <img className="vector2" src={vector2} />
        <img className="vector1" src={vector1} />
        <img className="logo" src={logo} />
        <img className="bigCircle" src={bigCircle} />
        <img className="smallCircle" src={smallCircle} />
        <img className="people" src={people} />
        <img className="top-car" src={mobel} />
      </div>
    </div>
  );
};

export default Header;
