import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../components/main/LoginForm";

const Login = () => {
   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <LoginForm />
         </section>
      </main>
   );
};

export default Login;
