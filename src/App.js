import React from 'react';
import './App.css';
import LeftHalf from './component/LeftHalf';
import RightHalf from './component/RightHalf';
import Home from './pages/Home';
import {  Routes, Route } from "react-router-dom";
import Table from './pages/Table';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="table" element={<Table />} />
  </Routes>
  
  );
}

export default App;
