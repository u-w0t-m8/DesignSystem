import React, { Component } from "react";
import bgImg from "../../Assets/images/layers.png";

//components

class Homepage extends Component {
  //state = {  }
  render() {
    return (
      <div className="bg-img">
        {/* <img src={bgImg} className="bg-img" /> */}
        <div className="col-lg-4 col-md-6 col-sm-12 info-content">
          <div className="title">
            <h1>Design style guide</h1>
            <h4>A Central source of design information</h4>
          </div>
          <p>
            This design guide is meant to provide consistency across all our
            current and future projects.
          </p>
          <p>
            How to use the design page <a>click here</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
