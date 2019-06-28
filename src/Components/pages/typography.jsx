import React, { Component } from "react";

//component imports
import ProjectTitle from "../projectTitle";
import BannerTitle from "../bannerTitle";
import TypoPalette from "../typographyPalette";
import FAIcon from "../fontAwesomeCollection";

//logo import
import logo from "../../Assets/images/logoDark.png";
import bannerImg from "../../Assets/images/typographybanner.jpg";

class Typography extends Component {
  //Render Icon classes
  renderIcons(iconlabel, iconCollection) {
    return <FAIcon iconlabel={iconlabel} iconCollection={iconCollection} />;
  }

  constructor(props) {
    super(props);
    this.state = {
      iconCollection: [
        "far fa-file",
        "far fa-file-alt",
        "far fa-file-word",
        "far fa-file-excel",
        "far fa-file-pdf",
        "far fa-file-powerpoint",
        "far fa-file-code",
        "far fa-file-image"
      ],
      iconLabels: [
        "Generic file",
        "Text file",
        "Word file",
        "Excel file",
        "Pdf file",
        "Powerpoint file",
        "Code file file",
        "Image file"
      ],
      actionIcons: [
        "far fa-stop-circle",
        "far fa-pause-circle",
        "far fa-play-circle",
        "far fa-envelope",
        "far fa-clone",
        "fas fa-plus",
        "far fa-trash-alt"
      ],
      actionLabels: [
        "Stop",
        "Pause",
        "Play",
        "send",
        "Copy action",
        "Add",
        "Delete"
      ],
      projectIcons: ["fas fa-chart-area", "fas fa-database", "far fa-folder"],
      projectLabels: ["Data chart", "Database", "Project folder"]
    };
  }

  createIconGroup = (array1, array2) => {
    let iconGroup = [];
    for (let i = 0; i < array1.length; i++) {
      iconGroup.push(
        <FAIcon iconlabel={array2[i]} iconCollection={array1[i]} key={i} />
      );
    }
    return iconGroup;
  };

  render() {
    return (
      <div>
        <BannerTitle
          bannerImg={bannerImg}
          title={"Typography"}
          subheading={"Style of appearance of text / Art of working with text"}
        />
        <div className="container">
          <div className="content">
            <div className="emphasis-styles">
              <h2>Emphasis styles</h2>
              <p>
                Hierarchy is used to guide the reader's eye to what is most
                important.
              </p>
              <p>
                When establishing Hierarchy higher level items are usually
                larger bolder or different in some way. Don't over use fonts
                either keep it simple. Stick to a few complimentary styles.
              </p>
              <p>Combine font styles that are different but complimentary</p>
              <p>For example:</p>
              <ul>
                <li>Sans serif with serif fonts</li>
                <li>Short fonts with tall fonts</li>
                <li>Decorative with simple</li>
              </ul>
            </div>

            <p>
              Common types of fonts and what you need to know about them. Font
              styles alone can convey a mood or message. That's why it's
              important to think about your message and pick a font that fits.
            </p>
            <ul>
              <li>
                Serif fonts - have little strokes called serifs attached to the
                main part of the letter
              </li>
              <li>
                San serif fonts - do not have extra strokes, clean and modern,
                easier to read on computer screens and phones
              </li>
              <li>
                Display fonts - any decorative fonts, best for small amounts of
                texts e.g. titles and headers, more graphic heavy designs
              </li>
            </ul>
          </div>

          <ProjectTitle
            logo={logo}
            title={"Report Jazz Typography text collection"}
          />
          <div className="content">
            <TypoPalette
              fontType={"Heading 1"}
              ffamily={"'Raleway', sans-serif"}
              transform={"uppercase"}
              fsize={"40px"}
              fweight={"700"}
              lheight={"1.25em"}
              letterSpace={".075em"}
            />
            <TypoPalette
              fontType={"Heading 2"}
              ffamily={"'Raleway', sans-serif"}
              transform={"uppercase"}
              fsize={"36px"}
              fweight={"600"}
              lheight={"1.25em"}
              letterSpace={".075em"}
            />

            <TypoPalette
              fontType={"Heading 3"}
              ffamily={"'Roboto', sans-serif"}
              transform={"none"}
              fsize={"30px"}
              lheight={"1.15em"}
              letterSpace={"1em"}
            />
            <TypoPalette
              fontType={"Heading 4"}
              ffamily={"'Roboto', sans-serif"}
              transform={"none"}
              fsize={"24px"}
              lheight={"1.15em"}
              letterSpace={"1em"}
            />

            <TypoPalette
              fontType={"Heading 5"}
              ffamily={"'Roboto', sans-serif"}
              fsize={"20px"}
              lheight={"1em"}
            />
            <TypoPalette
              fontType={"Heading 6"}
              ffamily={"'Roboto Condensed', sans-serif"}
              fsize={"18px"}
              fweight={"bold"}
            />
            <TypoPalette
              fontType={"Body Text"}
              ffamily={"'Roboto', sans-serif"}
            />
            <TypoPalette
              fontType={"Subtext"}
              ffamily={"'Roboto', sans-serif"}
              fsize={"0.8em"}
              textcolor={"#969696"}
            />
            <p>button</p>

            <p>Overline</p>
          </div>

          <div className="font-awesome-icons">
            <h2>Font Awesome Icons</h2>

            <p className="content">
              When to use Icons: cons are powerful visual helpers and should be
              used with care. Overuse quickly results in user interfaces that
              are visually overwhelming or distracting.
            </p>

            <h3>File Icons</h3>
            <div className="row">
              {this.createIconGroup(
                this.state.iconCollection,
                this.state.iconLabels
              )}
            </div>
            <h3>Action Icons</h3>
            <div className="row">
              {this.createIconGroup(
                this.state.actionIcons,
                this.state.actionLabels
              )}
            </div>
            <h3>Project Icons</h3>
            <div className="row">
              {this.createIconGroup(
                this.state.projectIcons,
                this.state.projectLabels
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Typography;
