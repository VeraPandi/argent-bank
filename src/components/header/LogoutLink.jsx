import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogoutLink = () => {
   return (
      <Link to="/" className="main-nav-item">
         <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
         Sign Out
      </Link>
   );
};

export default LogoutLink;
