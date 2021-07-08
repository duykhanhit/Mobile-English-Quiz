import React, { createContext, useReducer, useEffect } from "react";
import * as types from "../../constants";
import * as api from "../../api";
import UserReducer from "../Reducer/UserReducer";
import { AsyncStorage } from "react-native";

export const initialState = {
  dataToken: {},
  userInfor: {}, // using for save user infor (success, data) when forgot password combine:
  me: {},
};

export const UserContext = createContext(initialState);
export default GlobalUserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, initialState);
  const userLogin = async (email, password) => {
    try {
      const { data } = await api.loginUser({ email, password });
      if (data?.success) {
        await AsyncStorage.setItem("dataToken", JSON.stringify(data));
        dispatch({
          type: types.LOGIN,
          payload: data,
        });
      }
    } catch (error) {
      if (!error.response.data.success) {
        return false;
      }
    }
  };
  const userRegister = async (params) => {
    try {
      const { data } = await api.registerUser(params);
      if (data?.success) {
        await AsyncStorage.setItem("dataToken", JSON.stringify(data));
        dispatch({
          type: types.SIGNUP,
          payload: data,
        });
      }
    } catch (error) {
      if (error.response.data.data === "Duplicate value") {
        alert("Email đã tồn tại, vui lòng đăng ký bằng tài khoản khác");
      }
    }
  };
  const forgotPasswordUser = async (email) => {
    try {
      const { data } = await api.forgotPassword(email);
      dispatch({
        type: types.FORGOT_PASSWORD,
        payload: data,
      });
      return true;
    } catch (error) {
      if (!error.response.data.success) {
        return false;
      }
    }
  };

  const verifyCodeUser = async (verifyCode, password) => {
    try {
      const { data } = await api.verifyCode(verifyCode, password);
      dispatch({
        type: types.VERIFY_CODE,
        payload: data,
      });
    } catch (error) {
      return false;
    }
  };

  const verifyCode = async (data) => {
    try {
      await api.checkVerifyCode(data);
      return true;
    } catch (error) {
      if (!error.response.data.success) {
        return error.response.data.data;
      }
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

  const getUser = async (token) => {
    try {
      const res = await api.getUser(token);
      if (res?.data.success) {
        dispatch({
          type: types.GET_USER,
          payload: res?.data,
        });
      } else {
        console.log(res?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("dataToken");
      dispatch({
        type: types.LOGOUT,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveToken = async () => {
    try {
      const dataToken = JSON.parse(await AsyncStorage.getItem("dataToken"));
      if (dataToken !== null) {
        const res = await api.getUser(dataToken.token);
        if (res?.data.success) {
          await AsyncStorage.setItem(
            "dataToken",
            JSON.stringify({ token: dataToken.token, success: true })
          );
          dispatch({
            type: types.LOGIN,
            payload: { token: dataToken.token, success: true },
          });
        } else {
          console.log(res?.data.data);
          await AsyncStorage.removeItem("dataToken");
        }
      }
    } catch (error) {}
  };
  return (
    <UserContext.Provider
      value={{
        userState,
        userLogin,
        userRegister,
        // getListExams,
        forgotPasswordUser,
        verifyCodeUser,
        getUser,
        logout,
        retrieveToken,
        verifyCode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
