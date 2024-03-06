import React from 'react'
import LeftHalf from '../component/LeftHalf';
import RightHalf from '../component/RightHalf';
import './Home.css'

const Home = () => {
  return (
    <div className="app">
    <div className="left-half">
      <LeftHalf />
    </div>
    <div className="right-half">
      <RightHalf />
    </div>
  </div>
  )
}

export default Home