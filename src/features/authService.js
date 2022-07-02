import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";
const PROFILE_URI = "/user/profile";
const LOGIN_URI = "/user/login";

/**
 * Get a token for the user
 * @property {string} userData - User profile information
 * @property {object} data - Query data
 * @return {promise} - Promise
 */

export const getUserAuth = async (userData) => {
   const response = await axios.post(BASE_URL + LOGIN_URI, userData);
   return response.data;
};

/**
 * Get user profile information
 * @property {string} token - User token
 * @property {object} data - Query data
 * @return {promise} - Promise
 */

export const getUserData = async (token) => {
   const response = await axios.post(
      BASE_URL + PROFILE_URI,
      {},
      { headers: { authorization: "Bearer" + token } }
   );

   return response.data;
};

/**
 * Update data
 * @property {string} userName - Usernames from the store
 * @property {string} token - User token
 * @property {object} data - Query data
 * @return {promise} - Promise
 */

export const editUserName = async (userName, token) => {
   const response = await axios.put(
      BASE_URL + PROFILE_URI,
      {
         firstName: userName.firstName,
         lastName: userName.lastName,
      },
      { headers: { authorization: "Bearer" + token } }
   );

   return response.data;
};
