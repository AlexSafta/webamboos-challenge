import React from "react";

import "../css/BasicSection.css";

const BasicSection = ({
  textFirst,
  imageUrl,
  title,
  description,
  additionalInfo,
}) => {
  return (
    <div
      className="section"
      style={
        textFirst ? { flexDirection: "row" } : { flexDirection: "row-reverse" }
      }
    >
      <div className="sub-section text">
        <p className="section-title">{title}</p>
        <p className="section-description">{description}</p>
        {!!additionalInfo && (
          <div className="additional-info">
            <p>{additionalInfo}</p>
          </div>
        )}
      </div>
      <div className="sub-section">
        <img
          src={imageUrl}
          style={!textFirst ? { marginLeft: "-20%" } : {}}
          className={textFirst ? "from-right" : "from-left"}
        />
      </div>
    </div>
  );
};

export default BasicSection;
