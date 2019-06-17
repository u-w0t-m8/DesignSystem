import React, { Component } from "react";

class Typography extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <div className="banner">
            <img src="https://picsum.photos/id/386/1110/300" />
          </div>
          <h1>Typography</h1>
          <h4>Common types of fonts and what you need to know about them.</h4>
        </div>
        <div className="content">
          <p>Style of appearance of text / Art of working with text</p>

          <p>
            Serif fonts - have little strokes called serifs attached to the main
            part of the letter
          </p>
          <p>
            San serif fonts - do not have extra strokes, clean and modern,
            easier to read on computer screens and phones
          </p>
        </div>

        <div className="title">
          <h1>Report Jazz Fonts</h1>
          <h5>Font family: roboto</h5>
        </div>

        <div className="content">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Subtitle 1</p>
          <p>Subtitle 2</p>
          <p>Body text</p>
          <p>button</p>
          <p>Caption</p>
          <p>Overline</p>
        </div>
      </div>
    );
  }
}

export default Typography;
