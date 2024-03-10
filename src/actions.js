export const setFirstName = (firstName) => {
    return {
      type: 'SET_FIRST_NAME',
      payload: firstName,
    };
  };
  
  export const setLastName = (lastName) => {
    return {
      type: 'SET_LAST_NAME',
      payload: lastName,
    };
  };
  
  export const setPincode = (pincode) => {
    return {
      type: 'SET_PINCODE',
      payload: pincode,
    };
  };
  
  export const setAuth = (auth) => {
    return {
      type: 'SET_AUTH',
      payload: auth,
    };
  };

  export const loadUserData = () => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const pincode = localStorage.getItem('pincode');
  
    return {
      type: 'LOAD_USER_DATA',
      payload: { firstName, lastName, pincode },
    };
  };
  