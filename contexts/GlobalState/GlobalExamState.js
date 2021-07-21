import React, { createContext, useReducer, useEffect } from "react";
import * as types from "../../constants";
import ExamReducer from "../Reducer/ExamReducer";
import * as api from "../../api";

const initialState = {
  exam: {},
  result: {},
  list_exams: [],
  list_exam_history: {},
  examed: {}
};

export const ExamContext = createContext(initialState);

export default GlobalExamProvider = ({ children }) => {
  const [examState, dispatch] = useReducer(ExamReducer, initialState);

  const getExam = async (id, token) => {
    try {
      const res = await api.getExam(id, token);
      if (res?.data.success) {
        dispatch({
          type: types.GET_EXAM,
          payload: res.data,
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log("getExam Error: ", error);
    }
  };

  const submitAnswer = async (questionId, resultId, answerId, token) => {
    try {
      const res = await api.postAnswer(questionId, resultId, answerId, token);
      if (res?.data.success) {
        dispatch({
          type: types.SUBMIT_ANSWER,
          payload: res?.data,
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log("submitAnswer Error: ", error);
    }
  };

  const getResult = async (resultId, token) => {
    try {
      const res = await api.getResult(resultId, token);
      if (res?.data.success) {
        dispatch({
          type: types.GET_RESULT,
          payload: res?.data,
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log("getResult Error", error);
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
      console.log("listExams Error: ", error);
      dispatch({
        type: types.GET_LIST_EXAM,
        payload: error.response.data,
      });
    }
  };

  const getExamHistory = async (token) => {
    try {
      const res = await api.getExamHistory( token);
      if (res?.data.success) {
        dispatch({
          type: types.GET_HISTORY_EXAM,
          payload: res?.data,
        });
      }
    } catch (error) {
      console.log("getExamHistory Error: ", error);
    }
  }

  const getExamed = async (id, token) => {
    try {
      const res = await api.getExamed(id, token);
      if (res?.data.success) {
        dispatch({
          type: types.GET_EXAMED,
          payload: res?.data,
        });
      }
    } catch (error) {
      console.log("getExamed Error: ", error);
    }
  }
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
        getExamHistory,
        getExamed
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};
