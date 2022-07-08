import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import LoginLink from "./LoginLink";
import LogoutLink from "./LogoutLink";
import { userIsLoggedSelector } from "../../utils/selectors";

/**
 * Manages a login and logout link depending on the user's login status
 * @const {boolean} isLogged - If "true", the user is logged in
 * @return {JSX.Element}
 */

const Navigation = () => {
   const isLogged = useSelector(userIsLoggedSelector);

   return (
      <nav className="main-nav">
         <Logo />
         {!isLogged && <LoginLink />}
         {isLogged && <LogoutLink />}
      </nav>
   );
};

export default Navigation;
