import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from '../../images/logo.png';
import './Navbar.css';


const Navbar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <img src={logo} alt=""/>
            </div>
          <div className="nav-link container-fluid justify-content-end">
            <Link to="/">
            <h5>Home</h5>
            </Link>
            <h5>Contact</h5>
            <Link to="/dashboard">
            <h5>Dashboard</h5>
            </Link>
            <h5>Admin</h5>
            <Link to="/login">
            <button onClick={() => setLoggedInUser({})} className="btn btn-info">
            <Link to="/login" className="text-white">{loggedInUser.email ? loggedInUser.name || loggedInUser.email : "Login"}</Link>
            </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;