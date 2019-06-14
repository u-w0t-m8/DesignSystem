import React, { Component } from "react";
import { Link } from "react-router";

// import { BrowserRouter as Link } from "react-router-dom";

//components

class Header extends Component {
  //state = {  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/4.0/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Design System
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/about">About</Link>
                <a class="nav-link" href="#">
                  Colour <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Typography
                </a>
              </li>

              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li> */}

              <li class="nav-item">
                <a class="nav-link" href="#">
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
