import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Table.css'
// import Button from '../component/Button';
import './Button.css'
import logo from '../assets/Mapsense Logo.png'
import Loader from '../component/Loader'

const Table = () => {

  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  // console.log(data);
  // console.log(location);
  const { firstName, lastName, pincode } = location.state || {};

  useEffect(() => {
    fetch(`https://65e5e94cd7f0758a76e7bb2d.mockapi.io/api/v1/findByPincode?pincode=${pincode}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data, typeof (data));
        // setUpdate((item)=>!{item});
        setLoader(false);
      })
      .catch(error => console.error('Error:', error));
  }, [update]);


  // const handleUpdate=()=>{
  //   fetch(`https://65e5e94cd7f0758a76e7bb2d.mockapi.io/api/v1/findByPincode?pincode=${pincode}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data);
  //     console.log(data, typeof (data))
  //   })
  //   .catch(error => console.error('Error:', error));
  // }



  console.log(`firstname : ${firstName}`);
  return (

    loader? <Loader/>
    :
    <div>
      <div className='userinfo'>
      {firstName && (
      <p style={{ display: 'inline-block', margin: '0', fontSize: '2.4rem', color: 'black' }} className='username'>
              <span style={{ display: 'inline-block', margin: '0', fontWeight: 'bold', fontSize: '4rem' }}>{firstName.slice(0, 1)}</span>
              {firstName.slice(1)}
              {lastName && <span style={{ display: 'inline-block', margin: '0' }}><pre> {lastName},</pre></span>}
             
            </p>
          )}
          {pincode&&<p style={{ display: 'inline-block', margin: '0' }}>{pincode}</p>}
      </div>
      <div className='logoo'>
        <img src={logo} alt="logo" className="logoimage" />
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Pincode</th>
              <th>District</th>
              <th>Center Name</th>
              <th>Fee Type</th>
              <th>State Name</th>
              <th>Vaccine Name</th>
              <th>Age Limit</th>
              <th>Slot</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {data !== "Not found" ?  data.map((item, index) => (
              <tr key={index}>
                <td>{item.pincode}</td>
                <td>{item.district}</td>
                <td>{item.centerName}</td>
                <td>{item.feeType}</td>
                <td>{item.stateName}</td>
                <td>{item.vaccineName}</td>
                <td>{item.ageLimit}</td>
                <td>{item.slot}</td>
                <td>{item.id}</td>
              </tr>
            )) : <p>No Data Available for this Pincode</p>
             }
          </tbody>
        </table>
      </div>
      <div className='buttons'>
        <div>
          <Link to='/' >
            <button className="table-button back" type="button">
              Go Back
            </button>
          </Link>

        </div>
        <div>
          <button className="table-button update" type="button" onClick={()=>{setUpdate(!update); setLoader(true)}} >
            Update Data
          </button>
        </div>
      </div>
    </div>

  );

}

export default Table