// RightHalf.js
import React, { useState } from 'react';
import './RightHalf.css';
import logo from '../assets/Mapsense Logo.png'
import { Link } from 'react-router-dom';

function RightHalf() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pincode, setPincode] = useState('');

  const handleResetForm = () => {
    setFirstName('');
    setLastName('');
    setPincode('');
  };

  return (
    <div className="right-half-content">
      <div className='logoo'>
        <img src={logo} alt="logo" className="logoimage" />
      </div>
      <form className="form">
        <label className="form-label">
          First Name:
          <br></br>
          <input
            type="text"
            className="form-input"
            value={firstName}
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="form-label">
          Last Name:
          <br></br>
          <input
            type="text"
            className="form-input"
            value={lastName}
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label className="form-label">
          Pincode:
          <br></br>
          <input
            type="text"
            className="form-input"
            value={pincode}
            placeholder='Pincode'
            onChange={(e) => setPincode(e.target.value)}
          />
        </label>
        
        {/* <Link to={{ pathname: "/table", state: { firstName: firstName, lastName: lastName, pincode: pincode } }}> */}
        <Link to='/table' state={{ firstName: firstName, lastName: lastName, pincode: pincode }}>
          <button className="form-button stats" type="button">
            Show Statistics
          </button>
        </Link>
        <button className="form-button reset" type="button" onClick={handleResetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
}

export default RightHalf;
