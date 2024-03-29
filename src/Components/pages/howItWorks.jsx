import React, { Component } from "react";

import BannerTitle from "../blockComponents/bannerTitle";

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

            <a
              href="https://digitalcarpenter.atlassian.net/wiki/spaces/FR/pages/836927570/Requirements+-+Draft?atlOrigin=eyJpIjoiMTMyMzRlZmJhYTg5NGViOThiMThkMjcyYzA0N2QzMzgiLCJwIjoiYyJ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confluence requirement page
            </a>

            <p>More details in link above.</p>

            <div className="row">
              <div className="placeholder">Placeholder</div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3>Wireframes</h3>
                <p>Collection of components</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
