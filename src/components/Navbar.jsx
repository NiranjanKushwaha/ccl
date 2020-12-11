import React from "react";
import logo from "../assets/logo-no-bg.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    // const toggler_bg = "";
  return (
    <div className="container-fluid main-navbar-div">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-md">
            <NavLink className="navbar-brand ml-md-2 ml-1" to="/">
              <img src={logo} className="m-0" alt="" />
            </NavLink>
            <button
              className="navbar-toggler {}"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "#ff9f43" }}
            >
              <span className="navbar-toggler-icon" style={{}}>
                &#8803;
              </span>
            </button>

            <div
              className="collapse navbar-collapse mr-lg-5 mr-md-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mr-lg-5 mr-md-3">
                <li className="nav-item active">
                  <NavLink
                    className="nav-link "
                    activeClassName="active_class"
                    exact
                    to="/"
                  >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-nowrap"
                    activeClassName="active_class"
                    to="/about"
                  >
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active_class"
                    to="/product"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active_class"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-nowrap"
                    activeClassName="active_class"
                    to="/dealer"
                  >
                    Dealer's portal
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
