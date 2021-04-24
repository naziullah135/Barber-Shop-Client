import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import menuOpen from "../../images/menu.png";
import menuClose from "../../images/close.png";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [click, setClick] = useState(true);

  return (
    <div className="header">
      <div>
        <div style={{ right: `${click ? "-250px" : "0px"}` }} id="sideNav">
          <nav>
            <ul>
              <li className="my-4">
                <a className="text-white nav-link" href="#banner">
                  HOME
                </a>
              </li>
              <li className="my-4">
                <a className="text-white nav-link" href="#feature">
                  FEATURES
                </a>
              </li>
              <li className="my-4">
                <a className="text-white nav-link" href="#service">
                  SERVICES
                </a>
              </li>
              <li className="my-4">
                <a className="text-white nav-link" href="#testimonial">
                  TESTIMONIALS
                </a>
              </li>
              <li className="my-4">
                <a className="text-white nav-link" href="#footer">
                  MEET US
                </a>
              </li>
              <li className="my-4">
                <Link className="text-white nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="/login"
                  className="text-white nav-link"
                  onClick={() => setLoggedInUser({})}
                >
                  {loggedInUser.email
                    ? loggedInUser.name || loggedInUser.email
                    : "Login"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div onClick={() => setClick(!click)} id="menuBtn">
          <img src={click ? menuOpen : menuClose} id="menu" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
