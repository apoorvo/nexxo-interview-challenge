import axios from "axios";
import { USER_API_BASE_URL } from "./axios";

const fetchAllUsers = (params) => axios.get(USER_API_BASE_URL, { params });

const fetchUser = (id) => axios.get(`${USER_API_BASE_URL}/${id}`);

const usersApi = {
  fetchAllUsers,
  fetchUser,
};

export default usersApi;
