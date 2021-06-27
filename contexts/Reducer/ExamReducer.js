import * as types from "../../constants";

export default ExamReducer = (prevState, action) => {
  switch(action.type) {
    case types.GET_EXAM:
      // console.log(action.payload);
      return {...prevState, ...action.payload};
    default:
      return {...prevState};
  }
}
