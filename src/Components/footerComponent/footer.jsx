import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//components

class Footer extends Component {
  //state = {  }
  render() {
    return (
      <footer className="page-footer font-small darken-3">
        <div className="footer-links col-md-12 py-5">
          <div className="flex-center">
            <Link to="/" className="fb-ic">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </Link>
            <Link to="/" className="tw-ic">
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </Link>
            <Link to="/" className="li-ic">
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </Link>
            <Link to="/" className="ins-ic">
              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </Link>
            <Link to="/" className="pin-ic">
              <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
            </Link>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2019 Copyright: Digital Carpenter
        </div>
      </footer>
    );
  }
}

export default Footer;
