import axios from "axios";
export const api = axios.create({
  baseURL: "https://back-colidiu.herokuapp.com/",
});
