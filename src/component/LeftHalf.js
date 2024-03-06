// LeftHalf.js
import React from 'react';
import covid from '../assets/Covid Background.png';
import './LeftHalf.css';
function LeftHalf() {
  return (
    <div className="left-half-content">
      <div className='data'>
        <h2>Vaccine Tracker</h2>
        <p>Find all the important information and all the things related to Covid Virus and Vaccine Here</p>
      </div>
      <img src={covid} alt="main" className="covidimage" />
  
    </div>
  );
}

export default LeftHalf;
