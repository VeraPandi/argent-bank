import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../header/Avatar";
import { logoutAction } from "../../features/actions";

const LogoutLink = () => {
   const dispatch = useDispatch();

   const onLogout = () => {
      dispatch(logoutAction());
   };

   return (
      <div className="main-nav-links">
         <Avatar />
         <Link to="/" className="main-nav-item" onClick={onLogout}>
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            Sign Out
         </Link>
      </div>
   );
};

export default LogoutLink;
