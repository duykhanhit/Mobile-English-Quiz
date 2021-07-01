import React, { createContext, useReducer, useEffect } from "react";
import * as types from "../../constants";
import ExamReducer from "../Reducer/ExamReducer";
import * as api from "../../api";

const initialState = {
  exam: {},
  result: {},
  list_exams: [],
};

export const ExamContext = createContext(initialState);

export default GlobalExamProvider = ({ children }) => {
  const [examState, dispatch] = useReducer(ExamReducer, initialState);

  const getExam = async (id) => {
    try {
      const res = await api.getExam(id);
      if (res?.data.success) {
        dispatch({
          type: types.GET_EXAM,
          payload: res.data,
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitAnswer = async (resultId, answerId) => {
    try {
      const res = await api.postAnswer(resultId, answerId);
      if (res?.data.success) {
        dispatch({
          type: types.SUBMIT_ANSWER,
          payload: res?.data,
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getResult = async (resultId) => {
    try {
      const res = await api.getResult(resultId);
      if (res?.data.success) {
        dispatch({
          type: types.GET_RESULT,
          payload: res?.data,
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log(error.responses);
    }
  };
  const listExams = async (token) => {
    try {
      const { data } = await api.getListExam(token);
      dispatch({
        type: types.GET_LIST_EXAM,
        payload: data,
      });
    } catch (error) {
      console.log("abc: ",error.response.data);
      dispatch({
        type: types.GET_LIST_EXAM,
        payload: error.response.data,
      });
    }
  };
  return (
    <ExamContext.Provider
      value={{
        exam: examState.exam,
        result: examState.result,
        list_exams: examState.listExams,
        examState,
        getExam,
        submitAnswer,
        getResult,
        listExams,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};
