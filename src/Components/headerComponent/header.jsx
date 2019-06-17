import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

//components

class Header extends Component {
  //state = {  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img
              src="https://picsum.photos/id/145/30/30"
              className="d-inline-block align-top logo"
              alt=""
            />
            Design System
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                <Link to="/">Link</Link>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Colour
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Typography
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Layout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
