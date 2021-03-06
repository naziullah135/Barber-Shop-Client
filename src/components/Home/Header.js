import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <section id="banner">
      <img src={logo} className="logo" />
      <div className="banner-text">
        <h1>Hair Studio</h1>
        <p>Style Your Hair Is Style Is Life </p>
        <div className="banner-btn">
          <a href="#">
            <span></span>Find Out
          </a>
          <a href="#">
            <span></span>Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
