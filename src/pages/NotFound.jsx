import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <div className="notFound">
         <main className="notFound-main">
            <div className="notFound-content">
               <div className="error-code">404</div>
               <h1 className="error-message">
                  Whoops ! The page you are looking could not be found...
               </h1>
               <Link to="/" className="back-link">
                  Back to home
               </Link>
            </div>
         </main>
      </div>
   );
};

export default NotFound;
