// import API from "axios";

// const requestHandler = {
//   Headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "*", // GET, POST, PUT, DELETE, OPTIONS
//     "Access-Control-Allow-Credentials": true,
//   },
// };

// const axios = API.create({
//   baseURL: "https://todo-mzq06yc1o-7776667766s-projects.vercel.app/api",
//   headers: requestHandler.Headers,
// });

// axios.interceptors.request.use((request) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }
//   return request;
// });

// export default axios;


import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;


