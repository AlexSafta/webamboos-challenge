import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import "../css/Card.css";

const Card = ({ title, message, expanded, handleOnToggle, isButton, handleOnClick }) => {
  return (
    <div className={`faq-card ${isButton ? "red-backgr" : ""}`} onClick={() => isButton && handleOnClick()} >
      <div className={`faq-title ${isButton ? "red-title" : ""}`} onClick={handleOnToggle}>
        <p className="title">{title}</p>
        <p className="icon">
          {isButton ? <FaPlus /> : expanded ? <FaMinus /> : <FaPlus />}
        </p>
      </div>
      {!isButton && (
        <div className="message" style={!expanded ? { display: "none" } : {}}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
