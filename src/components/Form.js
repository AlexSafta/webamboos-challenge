import React, { useState } from "react";

import '../css/Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailAddress(event.target.value);
  };

  return (
    <div className="form-card">
      <form className="form">
        <label className="form-label">
          Name
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={handleNameChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Email Address
          <input
            type="email"
            placeholder="Your email address"
            value={emailAddress}
            onChange={handleEmailChange}
            className="form-input"
            required
          />
        </label>

        <button className="red-btn">
          GET STARTED
          <span className="arrow">→</span>
        </button>
      </form>
    </div>
  )
};

export default Form;