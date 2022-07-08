import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { userAuthSelector } from "../../utils/selectors";

/**
 * Displays the user's name and avatar
 * @property {object} user - Query data
 * @return {JSX.Element}
 */

const Avatar = () => {
   const user = useSelector(userAuthSelector);

   return (
      <section className="avatar">
         <span className="avatar-icon">
            <FontAwesomeIcon icon={faCircleUser} />
         </span>
         <span className="avatar-name">{user && user.body.firstName}</span>
      </section>
   );
};

export default Avatar;
