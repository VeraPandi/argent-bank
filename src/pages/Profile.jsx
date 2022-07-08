import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../services/authService";
import Account from "../components/main/Account";
import UserNamesForm from "../components/main/UserNamesForm";
import { dataAction } from "../features/actions";
import { userTokenSelector } from "../utils/selectors";
/**
 * Displays a user profile page
 * @property {string} token - User token
 * @property {object} data - Query data
 * @return {JSX.Element}
 */

const Profile = () => {
   const dispatch = useDispatch();

   const token = useSelector(userTokenSelector);

   // We retrieve information related to user token
   getUserData(token).then((data) => {
      dispatch(dataAction(data));
   });

   return (
      <main className="main bg-dark">
         <UserNamesForm />
         <Account />
      </main>
   );
};

export default Profile;
