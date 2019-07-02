import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //links won't work if you get rid of the unused
import DClogo from "../../Assets/images/dclogodesktop.png";
// import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";

//components
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      isOpen: !state.isOpen
    }));
    console.log("this has been clicked");
  }

  toggleCollapse = () => {
    console.log("test");
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bs-navbar-collapse">
          <Link to="/">
            <img
              src={DClogo}
              className="d-inline-block align-top logo"
              alt="logo"
            />
          </Link>

          <button
            onClick={this.handleClick}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {this.state.isToggleOn ? (
              ""
            ) : (
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
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
            )}

            <span className="navbar-toggler-icon" />
          </button>

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
