import React, { Component } from "react";

//imports
import ProjectTitle from "../blockComponents/projectTitle";
import BannerTitle from "../blockComponents/bannerTitle";
import logo from "../../Assets/images/logoDark.png";

import bannerImg from "../../Assets/images/storage.jpg";

class AssetLocation extends Component {
  render() {
    return (
      <div>
        <BannerTitle
          bannerImg={bannerImg}
          title={"Assets"}
          subheading={
            "Links to images, logos and anything graphic related in one place"
          }
        />

        <div className="container">
          <div className="row">
            <div className="placeholder">Placeholder</div>
          </div>
          <ProjectTitle logo={logo} />
          <div className="file-location-component">
            <span>
              <i className="far fa-folder" />{" "}
              <a
                href="https://drive.google.com/open?id=1HSVms73rXezEyGWjPCDfs48GIvdagvmZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                File asset location for ReportJazz
              </a>
            </span>
          </div>

          {/* <ProjectTitle title={"PERISKOPE"} /> */}

          {/*Test code*/}
          <div className="file-location-component">
            <span>
              <i className="far fa-folder" />{" "}
              {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
              File asset location for periskope
              {/* </a> */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AssetLocation;
