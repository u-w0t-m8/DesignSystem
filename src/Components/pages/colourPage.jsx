import React, { Component } from "react";

//components
import ColourPalette from "../blockComponents/colourPalette";
import ProjectTitle from "../blockComponents/projectTitle";
import BannerTitle from "../blockComponents/bannerTitle";

//logo import
import logo from "../../Assets/images/logoDark.png";
//import bannerImg from "../../Assets/images/colourpg.jpg";
import bannerImg from "../../Assets/images/swatch.jpg";

class ColourPage extends Component {
  //Helper function renders colour palette component
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

  //creates a collection of palettes to render
  createColourPalette = () => {
    // arrays: colour palette collection
    let labels = [
      "Dark blue",
      "Primary Blue",
      "Light Blue",
      "Pastel Blue",
      "Dark Orange",
      "Orange",
      "Light Orange",
      "Pastel Orange",
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
    var textColour = "#fff"; //default text colour over non white background

    //Assumes that all arrays will be the same in length
    //i.e. a colour component will always have these properties.
    // should not be null
    for (let i = 0; i < labels.length; i++) {
      //If colour is a light colour or red assign it black text else assign it white.
      //light colours mainly contain "F" in the hexadecimal
      if (hexCodes[i].includes("F") && !labels[i].includes("Error Red")) {
        textColour = "#000";
      } else {
        textColour = "#fff";
      }
      //push Colour palette items onto palette array
      palette.push(
        <ColourPalette
          label={labels[i]}
          scss={scssCodes[i]}
          hexCode={hexCodes[i]}
          textColour={textColour}
          key={i}
        />
      );
    }
    //return array of colourpalette
    return palette;
  };

  /*****************************
   *   Render function here    *
   *****************************/
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
            <h1>Colour</h1>
            <p>
              Colour is everywhere. It can communicate a message without using
              words and can evoke emotion.
            </p>

            <p>
              When adding colour to any design readability is the most
              important. Your colours should be legible and easy on the eyes.
              That can mean not using colour in every detail.
            </p>
            <p>
              Neutral colours like black, white and grey can help balance your
              design, so when you use colour it really stands out.
            </p>
            <p>
              Every colour sends a message. Consider the tone of your project
              and choose a colour palette that fits. e.g. Bright colours usually
              reflect a fun modern vibe desaturated colours often appear more
              business like There are no strict rules when it comes to applying
              colours, however there are formulas/combinations that optimises
              the aesthetic of colour usage.
            </p>
            <h2>Do's and Don'ts</h2>
            <p>
              Consistent - colour should be applied throught a UI consistently
              and be compatible with the brand it represents
            </p>
            <p>
              Distinct - Create distinction between elements with sufficient
              contrast between them.
            </p>
            <p>
              Intentional - Colour should be applied purposefully as it can
              convey meaning in multiple ways, such as relationships between
              elements and degrees of hierarchy.
            </p>

            <div className="row">
              <div className="col-md-6">
                <div className="snacc-bar-success">Do</div>

                <div className="example">
                  <div className="ex1">
                    <h1>Heading 1</h1>
                  </div>
                  <div className="ex2">
                    <h2>Heading 2</h2>
                    <h5>subheading line here</h5>
                  </div>

                  <p> Example:</p>
                  <ul>
                    <li>Dark text on light colours text</li>
                    <li>contrasting bg colour</li>
                    <li>Complimenting colours</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="snacc-bar-error">Do not</div>

                <div className="example">
                  <div className="ex3">
                    <h1>Heading 1</h1>
                  </div>
                  <div className="ex4">
                    <h2>Heading 2</h2>
                    <h5>subheading line here</h5>
                  </div>

                  <p> Example:</p>
                  <ul>
                    <li>Dark text on dark colours</li>
                    <li>light text on light colours</li>
                    <li>Colours that clash</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="content" />
        </div>

        {/* dynamically rendering from array */}
        <div className="col-md-12">
          <ProjectTitle logo={logo} title={"Report Jazz Colour palette"} />
          <div className="row">{this.createColourPalette()}</div>
        </div>
      </div>
    );
  }
}

export default ColourPage;
