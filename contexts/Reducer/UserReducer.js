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
      return { ...prevState, me: {...action.payload} };
    case types.LOGOUT: 
    // console.log({...prevState});
      return {...prevState, dataToken: { success: false, token: ""}}
    case types.UPDATE_USER:
      return {...prevState, me: {...action.payload}};
    case types.IS_LOADING:
      return {...prevState}
    default:
      return { ...prevState };
  }
};
