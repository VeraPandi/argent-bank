import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";
const PROFILE_ENDPOINT = "/user/profile";
const LOGIN_ENDPOINT = "/user/login";

/**
 * Get a token for the user
 * @property {string} userData - User profile information
 * @property {object} data - Query data
 * @return {promise} - Promise
 */

export const getUserAuth = async (userData) => {
   try {
      const response = await axios.post(BASE_URL + LOGIN_ENDPOINT, userData);
      return response.data;
   } catch (error) {
      console.error(error);
   }
};

/**
 * Get user profile information
 * @property {string} token - User token
 * @property {object} data - Query data
 * @return {promise} - Promise
 */

export const getUserData = async (token) => {
   try {
      const response = await axios.post(
         BASE_URL + PROFILE_ENDPOINT,
         {},
         { headers: { authorization: "Bearer" + token } }
      );
      return response.data;
   } catch (error) {
      console.error(error);
   }
};

/**
 * Update data
 * @property {string} userName - Usernames from the store
 * @property {string} token - User token
 * @property {object} data - Query data
 * @return {promise} - Promise
 */

export const editUserName = async (userName, token) => {
   try {
      const response = await axios.put(
         BASE_URL + PROFILE_ENDPOINT,
         {
            firstName: userName.firstName,
            lastName: userName.lastName,
         },
         { headers: { authorization: "Bearer" + token } }
      );
      return response.data;
   } catch (error) {
      console.error(error);
   }
};
