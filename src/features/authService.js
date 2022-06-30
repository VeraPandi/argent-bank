import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";
const PROFILE_URI = "/user/profile";
const LOGIN_URI = "/user/login";

export const getUserAuth = async (token) => {
   const response = await axios.post(BASE_URL + PROFILE_URI, token);
   return response.data;
};

export const getUserData = async (userData) => {
   const response = await axios.post(BASE_URL + LOGIN_URI, userData);
   return response.data;
};
