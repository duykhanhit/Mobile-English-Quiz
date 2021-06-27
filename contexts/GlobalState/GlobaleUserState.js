import React, { createContext, useReducer, useState, useEffect } from "react";
import * as types from "../../constants";
import * as api from "../../api";
import UserReducer from "../Reducer/UserReducer";

export const initialState = {};

export const UserContext = createContext(initialState);
export default GlobalUserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, initialState);
  const userLogin = async ({ email, password }) => {
    try {
      const { data } = await api.loginUser({ email, password });
      console.log("data", data);
      dispatch({
        type: types.LOGIN,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: types.LOGIN,
        payload: error.response.data,
      });
    }
  };
  const userRegister = async (params) => {
    try {
      const { data } = await api.registerUser(params);
      console.log("data", data);
      dispatch({
        type: types.SIGNUP,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: types.SIGNUP,
        payload: error.response.data,
      });
    }
  };
  // const getListExams = async (token) => {
  //   try {
  //     const data = api.getExams(token);
  //     console.log("data", data);
  //     dispatch({
  //       type: types.GET_EXAMS,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     console.log(error.responses);
  //     dispatch({
  //       type: types.GET_EXAMS,
  //       payload: error.responses,
  //     });
  //   }
  // };

  const getUser = async ( token ) => {
    try {
      const res = await api.getUser(token);
      if (res?.data.success) {
        dispatch({
          type: types.GET_USER,
          payload: res?.data
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <UserContext.Provider
      value={{
        userState,
        userLogin,
        userRegister,
        // getListExams,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
