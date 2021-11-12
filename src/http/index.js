import axios from "axios";

const endpoint = "";

const http = axios.create({
  baseURL: endpoint,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.status);
    return Promise.reject(error);
  }
);

export default http;
