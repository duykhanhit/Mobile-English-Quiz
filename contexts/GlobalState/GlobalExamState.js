import React, { createContext, useReducer, useEffect } from 'react';
import * as types from "../../constants";
import ExamReducer from '../Reducer/ExamReducer';
import * as api from '../../api';

const initialState = {}

export const ExamContext = createContext(initialState);

export default GlobalExamProvider = ({ children }) => {
  const [examState, dispatch] = useReducer(ExamReducer, initialState);

  const getExam = async (id) => {
    try {
      const { data } = await api.getExam(id);
      dispatch({
        type: types.GET_EXAM,
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ExamContext.Provider value={{
      examState,
      getExam
    }}>
      {children}
    </ExamContext.Provider>
  )
}
