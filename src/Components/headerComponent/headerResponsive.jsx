import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //links won't work if you get rid of the unused
import DClogo from "../../Assets/images/dclogodesktop.png";
import MenuToggle from "../headerComponent/menuToggle";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <MenuToggle />
      <div className="nav__logo">
        <Link to="/">
          <img
            src={DClogo}
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Link>
      </div>
      <div className="links">
        <ul>
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

export default toolbar;
