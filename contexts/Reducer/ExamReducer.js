import * as types from "../../constants";

export default ExamReducer = (prevState, action) => {
  switch (action.type) {
    case types.GET_EXAM:
      // console.log(action.payload);
      return { ...action.payload };
    // case types.GET_EXAMS:
    //   return { ...action.payload };
    default:
      return { ...prevState };
  }
};
