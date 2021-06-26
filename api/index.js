import axios from "axios";

const baseUrl = "http://13.229.240.165:3000";

export const getExam = (params) =>
  axios.get(`${baseUrl}/api/exam/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDY4MjA5OSwiZXhwIjoxNjI0NzY4NDk5fQ.RWxeSOue2WO8jm_6e0ohBwkmf_QuSio_HbBIzO606I0`,
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDY4MjA5OSwiZXhwIjoxNjI0NzY4NDk5fQ.RWxeSOue2WO8jm_6e0ohBwkmf_QuSio_HbBIzO606I0`,
      },
    }
  );
export const getResult = (params) => 
  axios.get(`${baseUrl}/api/result/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2YwYmE4M2ZiNTA2MzAwNDYwODdiOCIsImlhdCI6MTYyNDY4MjA5OSwiZXhwIjoxNjI0NzY4NDk5fQ.RWxeSOue2WO8jm_6e0ohBwkmf_QuSio_HbBIzO606I0`,
    },
  });
