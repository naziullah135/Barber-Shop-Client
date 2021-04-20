import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faShoppingCart,
  faUsers,
  faEdit,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      fetch('https://salty-plateau-71286.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => setIsAdmin(data));
  }, [loggedInUser])

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between py-5 px-4"
      style={{ height: "100vh" }}>
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/book" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/addreview" className="text-white">
            <FontAwesomeIcon icon={faEdit} /> <span>Add Review</span>
          </Link>
        </li>
          <li>
          <Link to="/addservice" className="text-white">
            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
          </Link>
        </li>
        <li>
          <Link to="/addadmin" className="text-white">
            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/orders" className="text-white">
            <FontAwesomeIcon icon={faEdit} /> <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/manageservices" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Sevices</span>
          </Link>
        </li>
        </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
