import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //links won't work if you get rid of the unused
import DClogo from "../../Assets/images/dclogodesktop.png";

const sideDraw = props => (
  <nav className="side-draw">
    <ul>
      <li>
        <Link to="/">
          <img
            src={DClogo}
            className="d-inline-block align-top side-logo"
            alt="logo"
          />
        </Link>
      </li>
      <li>
        <Link to="/colourPage">Colour</Link>
      </li>
      <li>
        <Link to="/typography">Typography</Link>
      </li>
      <li>
        <Link to="/layout">Layout</Link>
      </li>
      <li>
        <Link to="/assetLocation">Asset Locations</Link>
      </li>
      <li>
        <Link to="/howItWorks">How it works</Link>
      </li>
    </ul>
  </nav>
);

export default sideDraw;
