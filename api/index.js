import axios from "axios";

const baseUrl = "http://13.229.240.165:3000";

export const getExam = (params, token) =>{
  return axios.get(`${baseUrl}/api/exam/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })};
export const postAnswer = (resultId, answerId, token) =>{
  return axios.post(
    `${baseUrl}/api/answer/submit`,
    {
      result_id: resultId,
      answer_id: answerId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )};
export const getResult = (params, token) =>{
  return axios.get(`${baseUrl}/api/result/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })};
// login
export const loginUser = async (params) => {
  return await axios.post(`${baseUrl}/api/auth/login`, params);
};
//sign up
export const registerUser = async (params) => {
  return await axios.post(`${baseUrl}/api/auth/register`, params);
};

// forgot_password
// params: email
export const forgotPassword = (params) => {
  return axios.post(`${baseUrl}/api/auth/forgot`, params);
};

export const verifyCode = (params, password) => {
  return axios.put(`${baseUrl}/api/auth/reset-password/${params}`, {
    password,
  });
};

export const getListExam = (token) => {
  return axios.get(`${baseUrl}/api/exam`, {
    headers: {
      "Content-Type": "json/application",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUser = (token) =>{
  return axios.get(`${baseUrl}/api/auth/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })};
