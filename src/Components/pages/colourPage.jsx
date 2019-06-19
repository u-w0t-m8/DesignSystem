import React, { Component } from "react";

//components
import ColourPalette from "../colourPalette";

class ColourPage extends Component {
  renderPalette(label, scss, hexCode) {
    return <ColourPalette label={label} scss={scss} hexCode={hexCode} />;
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <div className="banner">
            <img src="https://picsum.photos/id/283/1110/300" alt="banner" />
          </div>
          <h1>Colour</h1>
          <h4>Why is it important?</h4>
        </div>
        <div className="content">
          <p>
            Colour is everywhere. It can communicate a message without using
            words and can evoke emotion.
          </p>

          <p>
            When adding colour to any design readability is the most important.
            Your colours should be legible and easy on the eyes. That can mean
            not using colour in every detail. Neutral colours like black, white
            and grey can help balance your design, so when you use colour it
            really stands out. Every colour sends a message. Consider the tone
            of your project and choose a colour palette that fits. e.g. Bright
            colours usually reflect a fun modern vibe desaturated colours often
            appear more business like There are no strict rules when it comes to
            applying colours, however there are formulas/combinations that
            optimises the aesthetic of colour usage.
          </p>
        </div>
        <div className="title">
          <h2>Report Jazz Colour Palette</h2>
        </div>
        <div className="content" />
        <div className="row">
          {this.renderPalette("Primary Blue", "$primaryBlue;", "#2A81EA")}
          {this.renderPalette("Primary Orange", "$primaryOrange;", "#EE6831")}
          {this.renderPalette("Primary Blue", "$primaryBlue;", "#2A81EA")}
          {this.renderPalette("Primary Orange", "$primaryOrange;", "#EE6831")}
          {this.renderPalette("Primary Blue", "$primaryBlue;", "#2A81EA")}
          {this.renderPalette("Primary Orange", "$primaryOrange;", "#EE6831")}
        </div>
      </div>
    );
  }
}

export default ColourPage;
