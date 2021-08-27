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
        console.log("userLogin Error: ", error);
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
      console.log("userRegister Error: ", error);
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
      console.log("forgotPasswordUser Error: ", error);
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
      console.log("verifyCodeUser Error: ", error);
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
      console.log("getUser Error", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("dataToken");
      dispatch({
        type: types.LOGOUT,
      });
    } catch (error) {
      console.log("logout Error", error);
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
    } catch (error) {
      console.log("retrieveToken Error: ", error);
    }
  };

  const updateUser = async (formdata, token) => {
    try {
      const res = await api.updateUser(formdata, token);
      if (res?.data.success) {
        dispatch({
          type: types.UPDATE_USER,
          payload: res?.data,
        });
      } else {
        console.log("res", res);
      }
    } catch (error) {
      console.log("updateUser Error: ", error);
    }
  };

  const changePass = async (oldPass, newPass, token, callback) => {
    try {
      const res = await api.changePass(oldPass, newPass, token);
      console.log(res)
      if (res?.data?.success) {
        console.log("success");
          callback.success();
      } else {
        callback.failed();
        console.log("res", res);
      }
    } catch (error) {
      callback.failed();
      console.log("changePass Error: ", error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userState,
        userLogin,
        userRegister,
        forgotPasswordUser,
        verifyCodeUser,
        getUser,
        logout,
        retrieveToken,
        verifyCode,
        updateUser,
        changePass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
