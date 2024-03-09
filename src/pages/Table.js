import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Table.css'
import './Button.css'
import Loader from '../component/Loader'

const Table = ({ firstName, lastName, pincode }) => {

  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loader, setLoader] = useState(true);

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

  console.log(`firstname : ${firstName}`);
  return (

    loader ? <Loader />
      :
      <div>

        <div className='table-top'>

          <div className='userinfo'>
            <p className='username'>
              {firstName} {lastName},
            </p>
            <p style={{ display: 'inline-block', margin: '0' }}>&nbsp; {pincode}</p>
          </div>
          <div className='logoo'>
            <img src="assets/Logo.png" alt="logo" className="logoimage" />
          </div>
        </div>

        <div className='table'>
          {data !== "Not found" ?
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
                {data.map((item, index) => (
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
                ))
                }
              </tbody>

            </table>
            :
            <div className='no-entry'>No Data Available for this Pincode</div>
          }
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
            <button className="table-button update" type="button" onClick={() => { setUpdate(!update); setLoader(true) }} >
              Update Data
            </button>
          </div>
        </div>

      </div>

  );

}

export default Table