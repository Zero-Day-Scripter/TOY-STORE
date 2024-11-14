import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/HomePage">
          <img src="head.jpeg" alt="" className="custom-image" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/HomePage"
            >
              Home
            </Link>
            <Link className="nav-link active" to="/Cart">
              Cart
            </Link>
            <Link className="nav-link active" to="/login">
              SignOut
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
