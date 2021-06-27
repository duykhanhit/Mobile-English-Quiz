import * as types from "../../constants";

export default UserReducer = (prevState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...action.payload };
    case types.SIGNUP:
      return { ...action.payload };
      // case types.GET_EXAMS:
      // return { ...prevState, ...action.payload };
    default:
      return { ...prevState };
  }
};
