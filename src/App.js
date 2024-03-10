import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './actions';
import Table from './pages/Table';
import Login from './pages/Login';
import './App.css';


function App() {

  const { firstName, lastName, pincode, auth } = useSelector(state => state.login); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("pincode")) {
      dispatch(setAuth(true)); 
    }
  }, [dispatch]);



  return (
    <Routes>

      <Route path='/' element={!auth ? <Login /> : <Navigate to="/table" />} />


      <Route path="/table" element={auth ? <Table /> : <Navigate to="/" />} />

    </Routes>

  );
}

export default App;
