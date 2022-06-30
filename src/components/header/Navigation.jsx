import React from "react";
import Logo from "./Logo";
import LoginLink from "./LoginLink";
import LogoutLink from "./LogoutLink";

const Navigation = () => {
   return (
      <nav className="main-nav">
         <Logo />
         <LoginLink />
         <LogoutLink />
      </nav>
   );
};

export default Navigation;
