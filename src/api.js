import axios from "axios";
import { toast } from "react-hot-toast";
// import { getAccessTokenInfo, getUserInfo } from "./utils";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;
