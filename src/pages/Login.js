import React from 'react';
import { connect } from 'react-redux';
import { setFirstName, setLastName, setPincode, setAuth } from '../actions'; 

function Login({ firstName, lastName, pincode, setFirstName, setLastName, setPincode, setAuth }) {

    const handleResetForm = () => {
        setFirstName('');
        setLastName('');
        setPincode('');
    };

    const handleShowStatistics = () => {
        if (firstName && lastName && pincode) {
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("pincode", pincode);
            setAuth(true);
        } else {
            alert("Please fill in all fields before proceeding.");
        }
    };

    return (
        <div className='login'>
            <div className="left-half">
                <div className="left-half-content">
                    <div className='data'>
                        <h2>Vaccine Tracker</h2>
                        <p>Find all the important information and all the things related to Covid Virus and Vaccine Here</p>
                    </div>
                </div>
            </div>
            <div className="right-half">
                <div className="right-half-content">
                    <div className='logoo'>
                        <img src="/assets/Logo.png" alt="logo" className="logoimage" />
                    </div>

                    <h4>Vaccine Tracker</h4>

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

                        <button className="form-button stats" type="button" onClick={handleShowStatistics} >
                            Show Statistics
                        </button>

                        <button className="form-button reset" type="button" onClick={handleResetForm}>
                            Reset Form
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    firstName: state.login.firstName,
    lastName: state.login.lastName,
    pincode: state.login.pincode,
});

const mapDispatchToProps = {
    setFirstName,
    setLastName,
    setPincode,
    setAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
