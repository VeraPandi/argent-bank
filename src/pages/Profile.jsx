import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../features/authService";
import Account from "../components/main/Account";
import UserNamesForm from "../components/main/UserNamesForm";

/**
 * Displays a user profile page
 * @property {string} token - User token
 * @property {object} data - Query data
 * @return {JSX.Element}
 */

const Profile = () => {
   const token = useSelector((state) => state.auth.token);
   const dispatch = useDispatch();

   // We retrieve information related to user token
   getUserData(token).then((data) => {
      dispatch({
         type: "DATA_USER",
         payload: data,
      });
   });

   return (
      <main className="main bg-dark">
         <UserNamesForm />
         <Account />
      </main>
   );
};

export default Profile;
