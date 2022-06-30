import React from "react";
import Account from "../components/main/Account";
import UsernamesForm from "../components/main/UsernamesForm";

const Profile = () => {
   return (
      <main className="main bg-dark">
         <UsernamesForm />
         <Account />
      </main>
   );
};

export default Profile;
