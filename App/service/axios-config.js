//import { Notification } from "@arco-design/web-react";
import { getValueFor } from "App/hooks/SecureStore";
import axios from "axios";
import { useContext } from "react";

export const Axios = axios.create({
  baseURL: process.env.API_URL,
});

Axios.interceptors.request.use((config) => {
  return config;
});

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      "Request failed with status code 500" === error.message ||
      error?.response?.status >= 500
    ) {
      return Promise.reject({
        ...error,
        message: "It's not you, it's us. Try again later.",
      });
    } else {
      return Promise.reject(error);
    }
  }
);
