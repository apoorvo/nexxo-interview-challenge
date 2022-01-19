import axios from "axios";

export const setAuthHeaders = (setIsLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  axios.defaults.headers["app-id"] = process.env.REACT_APP_API_KEY;
  setIsLoading(false);
};

export const USER_API_BASE_URL = "https://dummyapi.io/data/v1/user";
