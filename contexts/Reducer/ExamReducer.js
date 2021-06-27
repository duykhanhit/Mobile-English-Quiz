import * as types from "../../constants";

export default ExamReducer = (prevState, action) => {
  switch(action.type) {
    case types.GET_EXAM:
      return { ...prevState, exam: {...action.payload}};
    case types.SUBMIT_ANSWER:
      return { ...prevState };
    case types.GET_RESULT:
      return { ...prevState, result: {...action.payload}};
    default:
      return {...prevState};
  }
}
