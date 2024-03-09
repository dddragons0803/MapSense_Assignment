import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Table from './pages/Table';
import Login from './pages/Login';
import './App.css';


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pincode, setPincode] = useState('');

  return (
    <Routes>
      <Route path='/' element={<Login
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPincode={setPincode}
        firstName={firstName}
        lastName={lastName}
        pincode={pincode} />} />

      <Route path="table" element={<Table
        firstName={firstName}
        lastName={lastName}
        pincode={pincode} />}
      />
    </Routes>

  );
}

export default App;
