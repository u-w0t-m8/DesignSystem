import React, { Component } from "react";

class ColourPalette extends Component {
  state = {};

  style = {
    backgroundColor: "{this.props}"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="palette" style={this.props}>
        <ul>
          <li>label: Primary Blue </li>
          <li>scss: $primaryBlue;</li>
          <li>Hex code: #2A81EA</li>
        </ul>

        <ul>
          <li>label: Primary Orange</li>
          <li>scss: $primaryOrange;</li>
          <li>Hex code: #EE6831</li>
        </ul>
      </div>
    );
  }
}

export default ColourPalette;
