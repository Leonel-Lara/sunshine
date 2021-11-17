import axios from "axios";

const endpoint = "https://2b9c-170-246-81-44.ngrok.io/";

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
