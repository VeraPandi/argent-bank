import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../features/authService";

const LoginForm = () => {
   const [usernamesLogin, setUsernamesLogin] = useState({
      email: "",
      password: "",
   });

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { isLogged } = useSelector((state) => state.auth);

   useEffect(() => {
      if (isLogged) {
         navigate("/profile");
      }
   }, [isLogged, navigate]);

   const onChange = (e) => {
      setUsernamesLogin((prevState) => ({
         ...prevState,
         [e.target.id]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      getUserData(usernamesLogin).then((data) => {
         dispatch({
            type: "LOGIN_USER",
            payload: data.body.token,
         });
         navigate("/profile");
      });
   };

   return (
      <form onSubmit={onSubmit}>
         <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input type="email" id="email" onChange={onChange} />
            <span className="email-error">Cet email n'existe pas</span>
         </div>
         <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={onChange} />
            <span className="password-error">Mot de passe inconnu</span>
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
