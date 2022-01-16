import React from 'react';

import Form from './Form';
import { topBarButtons } from '../utils/constants';
import '../css/Footer.css';

import logo from '../assets/logo.png';
import background from '../assets/bottom-backgr2.png';
import bottomCar from '../assets/bottom-car.png';
import vector from '../assets/vector-footer.png';
import vector2 from '../assets/vector2-footer.png';
import backgroundDetails from '../assets/bottom-backgr.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='bottom-car-section'>
        <img src={vector} className='footer-vector' />
        <img src={bottomCar} className='bottom-car' />
        <img src={vector2} className='footer-vector2' />
      </div>
      <div className='footer-content'>
        <div className='footer-description'>
          <p>We provide traffic management consultants so you get started quickly, contact us for a quote today!</p>
        </div>
        <Form />
      </div>
      <div className='background-section'>
        <img src={background} className='footer-backgr' />
        <img src={backgroundDetails} className='footer-details' />  
      </div>
      <div className='footer-nav'>
        <img src={logo} />
        <div className='buttons'>
        {
          !!topBarButtons && topBarButtons.map((btn, index) => {
            if (index !== topBarButtons.length - 1) 
              return (
                <button
                  key={index}
                  className="transparent-btn"
                >
                  {btn}
                </button>
              );
          })
        }
        </div>
      </div>
    </div>
  );
};

export default Footer;