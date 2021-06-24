import axios from "axios";

const baseUrl = "http://13.229.240.165:3000";

export const getExam = (params) =>
  axios.get(`${baseUrl}/api/exam/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDU0MjQ3NywiZXhwIjoxNjI0NjI4ODc3fQ.p9ltTpNiRDtlEkZQHm3_UWnYrAbMyNX79LRapKXir38`,
    },
  });
export const postAnswer = () =>
  axios.post(`${baseUrl}/api/answer/submit`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDU0MjQ3NywiZXhwIjoxNjI0NjI4ODc3fQ.p9ltTpNiRDtlEkZQHm3_UWnYrAbMyNX79LRapKXir38`,
    },
  });
export const getResult = (params) =>
  axios.get(`${baseUrl}/api/result/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDU0MjQ3NywiZXhwIjoxNjI0NjI4ODc3fQ.p9ltTpNiRDtlEkZQHm3_UWnYrAbMyNX79LRapKXir38`,
    },
  });