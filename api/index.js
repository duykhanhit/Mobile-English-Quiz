import axios from "axios";

const baseUrl = "http://13.229.240.165:3000";

export const getExam = (params) =>
  axios.get(`${baseUrl}/api/exam/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDc4MDU2NiwiZXhwIjoxNjI0ODY2OTY2fQ.irtFUHOX4LapzDNqzCqOcT7MV60YnAm-0kEViiYng_Q`,
    },
  });
export const postAnswer = (resultId, answerId) =>
  axios.post(
    `${baseUrl}/api/answer/submit`,
    {
      result_id: resultId,
      answer_id: answerId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDc4MDU2NiwiZXhwIjoxNjI0ODY2OTY2fQ.irtFUHOX4LapzDNqzCqOcT7MV60YnAm-0kEViiYng_Q`,
      },
    }
  );
export const getResult = (params) => 
  axios.get(`${baseUrl}/api/result/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDc4MDU2NiwiZXhwIjoxNjI0ODY2OTY2fQ.irtFUHOX4LapzDNqzCqOcT7MV60YnAm-0kEViiYng_Q`,
    },
  });
