import React, { Component } from "react";

//testing
import Toggle from "../Components/toggle";

class TypoPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ffamily: this.props.ffamily,
      transform: this.props.transform,
      fsize: this.props.fsize,
      fweight: this.props.fweight,
      lHeight: this.props.lheight,
      letterSpace: this.props.letterSpace
    };
  }

  render() {
    return (
      <div className="font-component">
        <div
          className="title"
          style={{
            fontFamily: this.state.ffamily,
            textTransform: this.state.transform,
            fontSize: this.state.fsize,
            fontWeight: this.state.fweight,
            lineHeight: this.state.lheight,
            letterSpace: this.state.letterSpace
          }}
        >
          {this.props.fontType}
        </div>

        <div className="content-code col-md-12">
          {this.props.ffamily == null ? (
            " "
          ) : (
            <code>font-family: {this.props.ffamily}; </code>
          )}
          {this.props.fsize == null ? (
            " "
          ) : (
            <code>font-size: {this.props.fsize}; </code>
          )}
          {this.props.transform == null ? (
            " "
          ) : (
            <code>text-transform: {this.props.transform}; </code>
          )}
          {this.props.fweight == null ? (
            " "
          ) : (
            <code>font-weight: {this.props.fweight}; </code>
          )}
          {this.props.lHeight == null ? (
            " "
          ) : (
            <code>line-height: {this.props.lheight}; </code>
          )}
          {this.props.letterSpace == null ? (
            " "
          ) : (
            <code>letter-spacing: {this.props.letterSpace}; </code>
          )}
        </div>
      </div>
    );
  }
}

export default TypoPalette;
