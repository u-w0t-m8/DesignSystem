import React, { Component } from "react";

//components
import ColourPalette from "../colourPalette";
import ProjectTitle from "../projectTitle";
import BannerTitle from "../bannerTitle";

//logo import
import logo from "../../Assets/images/logoDark.png";
// import bannerImg from "../../Assets/images/colourpg.jpg";
import bannerImg from "../../Assets/images/swatch.jpg";

class ColourPage extends Component {
  renderPalette(label, scss, hexCode, textColour) {
    return (
      <ColourPalette
        label={label}
        scss={scss}
        hexCode={hexCode}
        textColour={textColour}
      />
    );
  }

  render() {
    return (
      <div>
        <BannerTitle
          bannerImg={bannerImg}
          title={"Colour"}
          subheading={"Why is it important?"}
        />
        <div className="container">
          <div className="content">
            <p>
              Colour is everywhere. It can communicate a message without using
              words and can evoke emotion.
            </p>

            <p>
              When adding colour to any design readability is the most
              important. Your colours should be legible and easy on the eyes.
              That can mean not using colour in every detail. Neutral colours
              like black, white and grey can help balance your design, so when
              you use colour it really stands out. Every colour sends a message.
              Consider the tone of your project and choose a colour palette that
              fits. e.g. Bright colours usually reflect a fun modern vibe
              desaturated colours often appear more business like There are no
              strict rules when it comes to applying colours, however there are
              formulas/combinations that optimises the aesthetic of colour
              usage.
            </p>
          </div>

          <ProjectTitle logo={logo} title={"Report Jazz Colour palette"} />

          <div className="content" />
          <div className="col-md-12">
            <div className="row">
              {this.renderPalette(
                "Dark Blue",
                "$darkPrimary;",
                "#154075",
                "#fff"
              )}
              {this.renderPalette(
                "Primary Blue",
                "$primaryColour;",
                "#2A81EA",
                "#fff"
              )}
              {this.renderPalette(
                "Light Blue",
                "$lightPrimary;",
                "#94C0F4",
                "#000"
              )}
              {this.renderPalette(
                "Pastel Blue",
                "$pastelPrimary;",
                "#E3F2FF",
                "#000"
              )}
            </div>

            <div className="row">
              {this.renderPalette(
                "Dark Orange",
                "$darkSecondary;",
                "#C14310",
                "#fff"
              )}
              {this.renderPalette(
                "Orange",
                "$SecondaryColour;",
                "#EE6831",
                "#fff"
              )}
              {this.renderPalette(
                "Light Orange",
                "$lightSecondary;",
                "#F49D79",
                "#000"
              )}
              {this.renderPalette(
                "Pastel Orange",
                "$pastelSecondary;",
                "#FAD2C2",
                "#000"
              )}
            </div>

            <div className="row">
              {this.renderPalette("Error red", "$error;", "#EF3C3C", "#fff")}
              {this.renderPalette("Warning", "$warning;", "#F7C85F", "#000")}
              {this.renderPalette(
                "Success Green",
                "$success;",
                "#3DBA50",
                "#fff"
              )}
            </div>

            <div className="row">
              {this.renderPalette(
                "Error Background",
                "$errorBG;",
                "#FFCECE",
                "#000"
              )}

              {this.renderPalette(
                "Warning Background",
                "$warningBG;",
                "#FFF4DD",
                "#000"
              )}
              {this.renderPalette(
                "Success Background",
                "$successBG;",
                "#C0F5C8",
                "#000"
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColourPage;
