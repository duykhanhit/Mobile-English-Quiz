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
    default:
      return { ...prevState };
  }
};
