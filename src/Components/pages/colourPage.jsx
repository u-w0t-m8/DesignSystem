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

  createTable = () => {
    let labels = [
      "Dark blue",
      "Primary Blue",
      "Light Blue",
      "Pastel Blue",
      "Dark Orange",
      "orange",
      "light Orange",
      "pastel Orange",
      "Error Red",
      "Warning",
      "Success Green",
      "Error Background",
      "Warning Background",
      "Success Background",
      "Purple",
      "Secondary Blue",
      "Teal",
      "Pinkle"
    ];
    let scssCodes = [
      "$darkPrimary",
      "$primaryColour",
      "$lightPrimary",
      "$pastelPrimary",
      "$darkSecondary",
      "$SecondaryColour",
      "$lightSecondary",
      "$pastelSecondary",
      "$error",
      "$warning",
      "$success",
      "$errorBG",
      "$warningBG",
      "$successBG",
      "$purple",
      "$blueMid",
      "$teal",
      "$pinkle"
    ];
    let hexCodes = [
      "#154075",
      "#2A81EA",
      "#94C0F4",
      "#E3F2FF",
      "#C14310",
      "#EE6831",
      "#F49D79",
      "#FAD2C2",
      "#EF3C3C",
      "#F7C85F",
      "#3DBA50",
      "#FFCECE",
      "#FFF4DD",
      "#C0F5C8",
      "#8472bb",
      "#3a6493",
      "#2e9ac5",
      "#a64d79"
    ];
    let tables = [];

    // Outer loop to create parent
    for (let i = 0; i < labels.length; i++) {
      //Create the parent and add the children
      tables.push(
        <ColourPalette
          label={labels[i]}
          scss={scssCodes[i]}
          hexCode={hexCodes[i]}
        />
      );
    }
    return tables;
  };

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

          {/* dynamically rendering from array */}
          {/* <div className="row test">{this.createTable()}</div> */}

          <div className="col-md-12">
            <div className="row">
              {this.renderPalette(
                "Dark Blue",
                "$darkPrimary",
                "#154075",
                "#fff"
              )}
              {this.renderPalette(
                "Primary Blue",
                "$primaryColour",
                "#2A81EA",
                "#fff"
              )}
              {this.renderPalette(
                "Light Blue",
                "$lightPrimary",
                "#94C0F4",
                "#000"
              )}
              {this.renderPalette(
                "Pastel Blue",
                "$pastelPrimary",
                "#E3F2FF",
                "#000"
              )}
            </div>

            <div className="row">
              {this.renderPalette(
                "Dark Orange",
                "$darkSecondary",
                "#C14310",
                "#fff"
              )}
              {this.renderPalette(
                "Orange",
                "$SecondaryColour",
                "#EE6831",
                "#fff"
              )}
              {this.renderPalette(
                "Light Orange",
                "$lightSecondary",
                "#F49D79",
                "#000"
              )}
              {this.renderPalette(
                "Pastel Orange",
                "$pastelSecondary",
                "#FAD2C2",
                "#000"
              )}
            </div>

            <div className="row">
              {this.renderPalette("Error red", "$error", "#EF3C3C", "#fff")}
              {this.renderPalette("Warning", "$warning", "#F7C85F", "#000")}
              {this.renderPalette(
                "Success Green",
                "$success",
                "#3DBA50",
                "#fff"
              )}
            </div>

            <div className="row">
              {this.renderPalette(
                "Error Background",
                "$errorBG",
                "#FFCECE",
                "#000"
              )}

              {this.renderPalette(
                "Warning Background",
                "$warningBG",
                "#FFF4DD",
                "#000"
              )}
              {this.renderPalette(
                "Success Background",
                "$successBG",
                "#C0F5C8",
                "#000"
              )}
            </div>

            <div className="row">
              {this.renderPalette("purple", "$purple", "#8472bb", "#fff")}
              {this.renderPalette(
                "Secondary blue",
                "$blueMid",
                "#3a6493",
                "#fff"
              )}
              {this.renderPalette("Teal", "$teal", "#2e9ac5", "#fff")}
              {this.renderPalette("Pinkle", "$pinkle", "#a64d79", "#fff")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColourPage;
