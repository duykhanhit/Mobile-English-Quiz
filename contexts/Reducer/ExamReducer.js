import * as types from "../../constants";

export default ExamReducer = (prevState, action) => {
  switch (action.type) {
    case types.GET_EXAM:
      return { ...prevState, exam: { ...action.payload } };
    case types.SUBMIT_ANSWER:
      return { ...prevState };
    case types.GET_RESULT:
      return { ...prevState, result: { ...action.payload } };
    case types.GET_LIST_EXAM:
      return { ...prevState, list_exams: [...action.payload.data] };
    case types.GET_HISTORY_EXAM:
      return {...prevState, list_exam_history: {...action.payload}}
    default:
      return { ...prevState };
  }
};
