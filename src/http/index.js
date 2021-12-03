import axios from "axios";

const endpoint = "https://578d-170-246-82-36.ngrok.io/";

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
