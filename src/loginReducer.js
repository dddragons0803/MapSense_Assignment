const initialState = {
    firstName: '',
    lastName: '',
    pincode: '',
    auth: false,
  };
  
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FIRST_NAME':
        return {
          ...state,
          firstName: action.payload,
        };
      case 'SET_LAST_NAME':
        return {
          ...state,
          lastName: action.payload,
        };
      case 'SET_PINCODE':
        return {
          ...state,
          pincode: action.payload,
        };
      case 'SET_AUTH':
        return {
          ...state,
          auth: action.payload,
        };
      case 'LOAD_USER_DATA':
        return {
              ...state,
              ...action.payload,
            };
      default:
        return state;
    }
  };
  
export default loginReducer;
export { initialState }; 