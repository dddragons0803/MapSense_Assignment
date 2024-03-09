import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Table from './pages/Table';
import Login from './pages/Login';
import './App.css';


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pincode, setPincode] = useState('');
  const [auth, setAuth] = useState(false);


  useEffect(() => {
    if (localStorage.getItem("pincode")) {
      setAuth(true);
    }
  }, [])



  return (
    <Routes>

      <Route path='/' element={!auth ? <Login
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPincode={setPincode}
        firstName={firstName}
        lastName={lastName}
        pincode={pincode}
        setAuth={setAuth} /> : <Navigate to="/table" />} />


      <Route path="/table" element={auth ? <Table
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPincode={setPincode}
        firstName={firstName}
        lastName={lastName}
        pincode={pincode}
        setAuth={setAuth}
      /> : <Navigate to="/" />} />

    </Routes>

  );
}

export default App;
