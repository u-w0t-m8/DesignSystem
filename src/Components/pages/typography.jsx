import React, { Component } from "react";

//component imports
import ProjectTitle from "../projectTitle";
import BannerTitle from "../bannerTitle";
import TypoPalette from "../typographyPalette";

//logo import
import logo from "../../Assets/images/logoDark.png";
import bannerImg from "../../Assets/images/typographybanner.jpg";

class Typography extends Component {
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
            <p>button</p>
            <p>Caption</p>
            <p>Overline</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Typography;
