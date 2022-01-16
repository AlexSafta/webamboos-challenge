import React from "react";

import '../css/Credits.css';

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Credits = () => {
  return (
    <div className="credits-main">
      <div className="credits">
        <p>Copyright @ 2019</p>
        <div className="social-media">
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
};

export default Credits;