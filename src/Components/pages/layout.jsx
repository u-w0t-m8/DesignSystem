import React, { Component } from "react";

//component imports
import ProjectTitle from "../blockComponents/projectTitle";
import BannerTitle from "../blockComponents/bannerTitle";
import BreakpointTable from "../blockComponents/breakpointLayout";
import PillButton from "../buttons/pillButton";
import RektButton from "../buttons/rectButtons";
import IconButton from "../buttons/iconButton";

//logo import
import logo from "../../Assets/images/logoDark.png";
import bannerImg from "../../Assets/images/layout.jpg";

class Layout extends Component {
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
              <li> mobile: 4dp units</li>
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
            <p>
              Material surfaces have a rectangular shape by default, with 4dp
              rounded corners. Their shape can be customized by adjusting their:
            </p>
            <ul>
              <li>Corner angles and curves</li>
              <li>Edge angles and curves</li>
            </ul>
            <p>The size of shape changes can be subtle or more significant.</p>

            <h2>Spacing</h2>
            <div className="table-wrapper">
              <BreakpointTable />
            </div>
            <h5>Breakpoint ranges</h5>
            <ul>
              <li>Extra Small: (max-width: 599)</li>
              <li>Small: (min-width: 600) and (max-width: 1023)</li>
              <li>Medium: (min-width: 1024) and (max-width: 1439)</li>
              <li>Large: (min-width: 1440) and (max-width: 1919)</li>
              <li>Extra large: (min-width: 1920)</li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <ProjectTitle logo={logo} title={"Report Jazz Colour palette"} />
        </div>
        <div className="container">
          <div className="content">
            <h2>Box Shadow</h2>
            <p>Universal box shadow properties for report jazz</p>
            <div className="font-component">
              <div className="content-code">
                <code>box-shadow: 3px 3px 3px $lightGrey;</code>
              </div>
            </div>
          </div>

          <div className="content">
            <h2>Button layout</h2>
            <p>button variations and purposes</p>
            <div className="button-collection">
              {/* test batch */}
              <PillButton
                label={"Round Pill Button"}
                buttonbg={"#ff1755"}
                bordercolor={"#ff1755"}
                color={"#fff"}
                key={1}
              />
              <PillButton
                label={"Round Pill Empty"}
                buttonbg={"rgba(255,255,255,0)"}
                bordercolor={"#ee6831"}
                color={"#ee6831"}
                key={2}
              />
              <RektButton
                label={"rect. button"}
                buttonbg={"#2e9ac5"}
                bordercolor={"#2e9ac5"}
                color={"#ffffff"}
                key={3}
              />
              <RektButton
                label={"rect 2 button"}
                bordercolor={"#212529"}
                color={"#000000"}
                key={4}
              />
            </div>
          </div>
          <div className="content">
            <div className="icon-collection">
              <p>Icon buttons</p>

              <IconButton icon="fas fa-plus" bgcolor="#ee6831" color="#fff" />
              <IconButton
                icon="far fa-file-pdf"
                bgcolor="#ff1755"
                color="#fff"
              />
              <IconButton
                icon="far fa-file-word"
                bgcolor="#2a81ea"
                color="#fff"
              />
              <IconButton
                icon="far fa-file-excel"
                bgcolor="#3dba50"
                color="#fff"
              />
            </div>
          </div>

          <div className="content">
            <h2>Snacc bars</h2>
            <div className="snacc-bar-collection">
              <div className="snacc-bar-success">Success</div>
              <div className="snacc-bar-error">Error</div>
              <div className="snacc-bar-info">Single line snack bar</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
