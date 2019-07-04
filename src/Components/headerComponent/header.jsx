import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //links won't work if you get rid of the unused
import DClogo from "../../Assets/images/dclogodesktop.png";
// import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";

import MenuToggle from "./menuToggle";

// //components
class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bs-navbar-collapse">
          <MenuToggle />
          <Link to="/">
            <img
              src={DClogo}
              className="d-inline-block align-top logo"
              alt="logo"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/colourPage">Colour</Link>
              </li>
              <li className="nav-item">
                <Link to="/typography">Typography</Link>
              </li>
              <li className="nav-item">
                <Link to="/layout">Layout</Link>
              </li>
              <li className="nav-item">
                <Link to="/assetLocation">Asset Locations</Link>
              </li>
              <li className="nav-item">
                <Link to="/howItWorks">How it works</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
