import * as types from "../../constants";

export default UserReducer = (prevState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...prevState, dataToken: action.payload };
    case types.SIGNUP:
      return { ...prevState, dataToken: action.payload };
    // case types.GET_EXAMS:
    // return { ...prevState, ...action.payload };
    case types.FORGOT_PASSWORD:
      return { ...prevState, userInfor: action.payload };
    case types.VERIFY_CODE:
      return { ...prevState, dataToken: action.payload };
    // case types.GET_EXAMS:
    // return { ...prevState, ...action.payload };
    case types.GET_USER:
<<<<<<< HEAD
      return { ...prevState, me: {...action.payload} };
    case types.LOGOUT: 
    // console.log({...prevState});
    return {...prevState, dataToken: { success: false, token: ""}}
=======
      return { ...prevState, me: { ...action.payload } };
>>>>>>> 2ff525b (fix-conflict)
    default:
      return { ...prevState };
  }
};
