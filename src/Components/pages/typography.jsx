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
  renderIcons(iconlabel, iconCollection) {
    return <FAIcon iconlabel={iconlabel} iconCollection={iconCollection} />;
  }

  createIconGroup = () => {
    let iconCollection = [
      "far fa-file",
      "far fa-file-alt",
      "far fa-file-word",
      "far fa-file-excel",
      "far fa-file-pdf",
      "far fa-file-powerpoint",
      "far fa-file-code",
      "far fa-file-image",
      "far fa-clone"
    ];
    let iconLabels = [
      "file",
      "file alternative",
      "word icon",
      "Excel icon",
      "pdf icon",
      "powerpoint icon",
      "code file icon",
      "image icon",
      "copy action Icon"
    ];
    let iconGroup = [];
    for (let i = 0; i < iconCollection.length; i++) {
      iconGroup.push(
        <FAIcon
          iconlabel={iconLabels[i]}
          iconCollection={iconCollection[i]}
          key={i}
        />
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
            <p>
              When to use Icons: cons are powerful visual helpers and should be
              used with care. Overuse quickly results in user interfaces that
              are visually overwhelming or distracting.
            </p>
            <h3>File Icons</h3>
            <div className="row">{this.createIconGroup()}</div>
            <h3>Action Icons</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Typography;
