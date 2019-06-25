import React, { Component } from "react";

class ColourPalette extends Component {
  state = {
    label: this.props.label,
    hexCode: this.props.hexCode,
    scss: this.props.scss
  };
  // constructor(props) {
  //   super(props);
  //   let colourPalleteProperties = new Array(1).fill({
  //     hexCode: this.state.hexCode,
  //     label: this.state.label,
  //     scss: this.state.scss
  //   });
  //   //console.log(colourPalleteProperties);
  // }

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

          <div className="row">
            <div className="col-md-4">
              <span>scss:</span>
            </div>
            <div className="col-md-8">
              <span>{this.state.scss};</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <span>Hex code:</span>
            </div>
            <div className="col-md-8">
              <span>{this.state.hexCode}</span>
            </div>
          </div>
          <div className="content-code">
            <pre>
              <code>
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
