import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAuth } from "../../services/authService";
import { loginAction } from "../../features/actions";

/**
 * Displays a login form
 * @const {string} loginData - User email and password
 * @property {object} data - Query data
 * @return {JSX.Element} - Form
 */

const LoginForm = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [loginData, setLoginData] = useState({
      email: "",
      password: "",
   });

   const onChange = (e) => {
      setLoginData((prevState) => ({
         ...prevState,
         [e.target.id]: e.target.value,
      }));
   };

   // Submitting the form returns a token for the user
   const onSubmit = (e) => {
      e.preventDefault();

      getUserAuth(loginData).then((data) => {
         dispatch(loginAction(data));
         navigate("/profile");
      });
   };

   return (
      <form onSubmit={onSubmit}>
         <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input type="email" id="email" onChange={onChange} />
         </div>

         <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={onChange} />
         </div>

         <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
         </div>

         <input className="sign-in-button" type="submit" value="Sign In" />
      </form>
   );
};

export default LoginForm;
