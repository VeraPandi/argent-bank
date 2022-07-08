import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserName } from "../../services/authService";
import { editAction } from "../../features/actions";
import { userAuthSelector, userTokenSelector } from "../../utils/selectors";

/**
 * Displays input fields to change the first and last name on his profile
 * @const {boolean} isOpen - Open/close the form
 * @const {string} userName - usernames from the store
 * @const {string} newFirstName - Firstname edited by the user
 * @const {string} newLastName - Lastname edited by the user
 * @property {object} user - User authentication data
 * @property {string} token - User token
 * @return {JSX.Element} - Form
 */

const UserNamesForm = () => {
   const dispatch = useDispatch();

   const [isOpen, setIsOpen] = useState(false);
   const [userName, setUserName] = useState({
      firstName: "",
      lastName: "",
   });
   const [newFirstName, setNewFirstName] = useState(userName.firstName);
   const [newLastName, setNewLastName] = useState(userName.lastName);

   const user = useSelector(userAuthSelector);
   const token = useSelector(userTokenSelector);

   // Open the form
   const onEdit = () => {
      setIsOpen(true);
   };

   // Cancel current changes and close the form
   const onCancel = () => {
      setIsOpen(false);
   };

   const onChange = (e) => {
      setUserName((prevState) => ({
         ...prevState,
         [e.target.id]: e.target.value,
      }));

      if (e.target.id === "firstName") {
         setNewFirstName(e.target.value);
      }
      if (e.target.id === "lastName") {
         setNewLastName(e.target.value);
      }
   };

   // Save form changes
   const onSave = (e) => {
      if (newFirstName) {
         e.preventDefault();
         setNewFirstName(e.target.value);
      }
      if (newLastName) {
         e.preventDefault();
         setNewLastName(e.target.value);
      }

      editUserName(userName, token);
      dispatch(editAction(userName));
      setIsOpen(false);
   };

   return (
      <div className="header">
         {isOpen ? (
            <>
               <h1>Welcome back</h1>
               <form className="usernames-form">
                  <section className="container left">
                     <div className="edit-name-wrapper left">
                        <label htmlFor="firstName"></label>
                        <input
                           type="text"
                           id="firstName"
                           placeholder={user.body.firstName}
                           onChange={onChange}
                        />
                     </div>

                     <button
                        type="button"
                        className="edit-button"
                        onClick={onSave}
                     >
                        Save
                     </button>
                  </section>

                  <section className="container right">
                     <div className="edit-name-wrapper right">
                        <label htmlFor="lastName"></label>
                        <input
                           type="text"
                           id="lastName"
                           placeholder={user.body.lastName}
                           onChange={onChange}
                        />
                     </div>

                     <button
                        type="button"
                        className="edit-button"
                        onClick={onCancel}
                     >
                        Cancel
                     </button>
                  </section>
               </form>
            </>
         ) : (
            <>
               <h1>
                  Welcome back
                  <br />
                  {`${user && user.body.firstName} ${
                     user && user.body.lastName
                  }!`}
               </h1>

               <button type="button" className="edit-button" onClick={onEdit}>
                  Edit Name
               </button>
            </>
         )}
      </div>
   );
};

export default UserNamesForm;
