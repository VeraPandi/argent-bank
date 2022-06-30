import React from "react";

const UsernamesForm = () => {
   return (
      <div className="header">
         <h1>
            Welcome back
            <br />
            <form>{/* nom prénom */}</form>
         </h1>
         <button className="edit-button">Edit Name</button>
      </div>
   );
};

export default UsernamesForm;
