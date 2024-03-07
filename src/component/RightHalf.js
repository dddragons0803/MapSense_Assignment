// RightHalf.js
import React, { useState } from 'react';
import './RightHalf.css';
import logo from '../assets/Mapsense Logo.png'
import { Link } from 'react-router-dom';

function RightHalf() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pincode, setPincode] = useState('');
  const [formFilled, setFormFilled] = useState(false);
  
  const handleResetForm = () => {
    setFirstName('');
    setLastName('');
    setPincode('');
    setFormFilled(false);
  };

  const handleShowStatistics = () => {
    if (firstName && lastName && pincode) {
      // Only navigate if the form is filled
      setFormFilled(true);
    } else {
      // Display a message or handle the case when the form is not filled
      alert("Please fill in all fields before proceeding.");
     
      setFormFilled(false);
    }
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
            required="required"
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
            required="required"
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
            required="required"
            onChange={(e) => setPincode(e.target.value)}
          />
        </label>
        
    {formFilled ? <Link to='/table' state={{ firstName: firstName, lastName: lastName, pincode: pincode }}>
          <button className="form-button stats" type="button" onClick={handleShowStatistics} >
            Show Statistics
          </button>
            </Link> : <Link to='/' >
          <button className="form-button stats" type="button" onClick={handleShowStatistics} >
            Show Statistics
          </button>
            </Link>}
         
         
       
        <button className="form-button reset" type="button" onClick={handleResetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
}

export default RightHalf;
