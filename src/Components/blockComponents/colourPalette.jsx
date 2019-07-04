import React, { Component } from "react";

class ColourPalette extends Component {
  state = {
    label: this.props.label,
    hexCode: this.props.hexCode,
    scss: this.props.scss
  };

  render() {
    return (
      <div className="col-md-4 col-sm-6">
        <div
          className="palette"
          style={{
            backgroundColor: this.props.hexCode,
            color: this.props.textColour
          }}
        >
          <h5>{this.state.label}</h5>
          <div className="content-code">
            <pre>
              <code
                style={{
                  color: this.props.textColour
                }}
              >
                {this.state.scss}: {this.state.hexCode};
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default ColourPalette;
