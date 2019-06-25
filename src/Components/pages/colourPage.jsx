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

  createColourPalette = () => {
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
    let palette = [];
    var textColour = "#fff";

    for (let i = 0; i < labels.length; i++) {
      if (hexCodes[i].includes("F") && !labels[i].includes("Error Red")) {
        textColour = "#000";
      } else {
        textColour = "#fff";
      }
      palette.push(
        <ColourPalette
          label={labels[i]}
          scss={scssCodes[i]}
          hexCode={hexCodes[i]}
          textColour={textColour}
        />
      );
    }
    return palette;
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
          <div className="col-md-12">
            <div className="row">{this.createColourPalette()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColourPage;
