import React from "react";
import Logo from "./Logo";
import LoginLinks from "./LoginLinks";

const Navigation = () => {
   return (
      <nav className="main-nav">
         <Logo />
         <LoginLinks />
      </nav>
   );
};

export default Navigation;
