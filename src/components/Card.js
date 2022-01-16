import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import '../css/Card.css';

const Card = ({ title, message, expanded, handleOnToggle }) => {
  return (
    <div className='faq-card'>
      <div className='faq-title' onClick={handleOnToggle}>
        <p className='title'>{title}</p>
        <p className='icon'>
          {
            expanded ? <FaMinus /> : <FaPlus />
          }
        </p>
      </div>
      <div className='message' style={!expanded ? {display: 'none'} : {}}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Card;