import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LoginLinks = () => {
   return (
      <>
         <Link to="/login" className="main-nav-item">
            <FontAwesomeIcon className="icon" icon={faUserCircle} />
            Sign In
         </Link>
         <Link to="/" className="main-nav-item">
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            Sign Out
         </Link>
      </>
   );
};

export default LoginLinks;
