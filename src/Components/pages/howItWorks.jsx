import React, { Component } from "react";

import BannerTitle from "../bannerTitle";

//logo import
import bannerImg from "../../Assets/images/cute.jpg";

class HowItWorks extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <BannerTitle
          bannerImg={bannerImg}
          title={"How it works"}
          subheading={"How to use this design system."}
        />
        <div className="container">
          <div className="content">
            <h4>Elements and components are grouped by projects</h4>

            <p>
              There may be repeating elements or components for every product
            </p>

            <p>link to confluence page</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
