import axios from "axios";
import { USER_API_BASE_URL } from "./axios";

const fetchAllUsers = (params) => axios.get(USER_API_BASE_URL, { params });

const usersApi = {
  fetchAllUsers,
};

export default usersApi;
