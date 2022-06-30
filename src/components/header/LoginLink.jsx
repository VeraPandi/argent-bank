import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const LoginLink = () => {
   return (
      <Link to="/login" className="main-nav-item">
         <FontAwesomeIcon className="icon" icon={faUserCircle} />
         Sign In
      </Link>
   );
};

export default LoginLink;
