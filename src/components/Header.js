import React from "react";
import "../css/Header.css";
import background from "../assets/MaskGroup.png";
import people from "../assets/People.png";
import mobel from "../assets/mobel.png";
import BG from "../assets/BG.png";
import Vector2 from "../assets/Vector2.png";
import Vector1 from "../assets/Vector1.png";
import logo from "../assets/logo.png";
import cercmare from "../assets/cercmare.png";
import cercmic from "../assets/cercmic.png";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <button className="transparent-btn">ABOUT</button>
        <button className="transparent-btn">HOW TO</button>
        <button className="transparent-btn">FAQS</button>
        <button className="red-btn">CONTACT US</button>
      </div>
      <img className="background1" src={background} />
      <div className="backgr">
        <img className="background2" src={BG} />
        <img className="people" src={people} />
        <img className="mobile" src={mobel} />
        <img className="vector2" src={Vector2} />
        <img className="vector1" src={Vector1} />
        <img className="logo" src={logo} />
        <img className="cercmare" src={cercmare} />
        <img className="cercmic" src={cercmic} />
      </div>
      <div className="head">
        <p className="titlu"> Your awesome </p>
        <p className="titlu"> traffic permit </p>
        <p className="titlu"> consultant. </p>
        <button className="red-btn">
          GET STARTED <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
