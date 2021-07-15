import axios from "axios";
// import { getToken } from "./auth";

// const api = axios.create({
//   baseURL: "https://api2.zerotime.com.br",
//   // headers: {
//   //   'Content-Type': 'application/x-www-form-urlencoded'
//   // }
// });

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;

// import { create } from 'apisauce';

export const api = axios.create({
  baseURL: "https://app-idoso.herokuapp.com",
});
