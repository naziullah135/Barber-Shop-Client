import React from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../App";
import logo from '../../images/logo.png';
import './Navbar.css';


const Navbar = () => {

  return (
    <div className="header">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img src={logo} alt=""/>
            </div>
          <div class="nav-link container-fluid justify-content-end">
            <h5>Home</h5>
            <h5>Dashboard</h5>
            <h5>Blog</h5>
            <h5>Contact</h5>
            <h5>Admin</h5>
            <button className="btn btn-success">
            Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;