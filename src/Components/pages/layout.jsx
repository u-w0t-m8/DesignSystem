import React, { Component } from "react";

import ProjectTitle from "../projectTitle";
import BannerTitle from "../bannerTitle";
import BreakpointTable from "../breakpointLayout";
import PillButton from "../buttons/pillButton";
import RektButton from "../buttons/rectButtons";

//logo import
import logo from "../../Assets/images/logoDark.png";
import bannerImg from "../../Assets/images/layout.jpg";

class Layout extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <BannerTitle
          bannerImg={bannerImg}
          title={"Layout"}
          subheading={"How to use the design system."}
        />
        <div className="container">
          <div className="content">
            <h2>Grid</h2>
            <ul>
              <li>web: 8dp units</li>
              <li> mobile; 4dp units</li>
            </ul>

            <p>
              For a lot of the projects we use materialize design's 8pd grid for
              the web.
            </p>
            <p>
              Material Design layouts are visually balanced. Most measurements
              align to an 8dp grid applied, which aligns both spacing and the
              overall layout.
            </p>
            <p>
              Smaller components, such as iconography and typography, can align
              to a 4dp grid.
            </p>

            <p className="quote">
              Screen density = Screen width (or height) in pixels / Screen width
              (or height) in inches
            </p>

            <h2>Shape</h2>

            <h2>Spacing</h2>
            <BreakpointTable />

            <ProjectTitle logo={logo} title={"Report Jazz Colour palette"} />
            <div className="content">
              <h2>Box Shadow</h2>
              <p>Box shadow properties for report jazz</p>
              <div className="font-component">
                <div className="content-code">
                  <code>box-shadow: 0px 3px 6px #000;</code>
                </div>
              </div>
            </div>

            <div className="content">
              <h2>Button layout</h2>
              <p>button variations and purposes</p>
              <PillButton label={"test"} buttonbg={"#ff1755"} color={"#fff"} />
              <RektButton label={"test"} buttonbg={"#2e9ac5"} color={"#fff"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
