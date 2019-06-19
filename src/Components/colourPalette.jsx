import React, { Component } from "react";

class ColourPalette extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
  }

  render() {
    return (
      <div
        className="palette col-md-4"
        style={{ backgroundColor: this.props.hexCode }}
      >
        <h4> label: {this.props.label}</h4>
        <ul>
          <li>scss: {this.props.scss}</li>
          <li>Hex code: {this.props.hexCode}</li>
        </ul>
      </div>
    );
  }
}

export default ColourPalette;
