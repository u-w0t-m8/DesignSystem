import React, { Component } from "react";

//testing
// import Toggle from "../Components/blockComponents/toggle";

class TypoPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ffamily: this.props.ffamily,
      transform: this.props.transform,
      fsize: this.props.fsize,
      fweight: this.props.fweight,
      lHeight: this.props.lheight,
      letterSpace: this.props.letterSpace,
      textcolor: this.props.textcolor
    };
  }

  render() {
    return (
      <div className="font-component">
        <div
          className="title"
          style={{
            color: this.props.textcolor,
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
          {this.props.ffamily == null ? null : (
            <pre>
              <code>font-family: {this.props.ffamily}; </code>
            </pre>
          )}
          {this.props.fsize == null ? null : (
            <pre>
              <code>font-size: {this.props.fsize}; </code>
            </pre>
          )}
          {this.props.transform == null ? null : (
            <pre>
              <code>text-transform: {this.props.transform}; </code>
            </pre>
          )}
          {this.props.fweight == null ? null : (
            <pre>
              <code>font-weight: {this.props.fweight}; </code>
            </pre>
          )}
          {this.props.lHeight == null ? null : (
            <pre>
              <code>line-height: {this.props.lheight}; </code>
            </pre>
          )}
          {this.props.letterSpace == null ? null : (
            <pre>
              <code>letter-spacing: {this.props.letterSpace}; </code>
            </pre>
          )}
          {this.props.textcolor == null ? null : (
            <pre>
              <code>color: {this.props.textcolor}</code>
            </pre>
          )}
        </div>
      </div>
    );
  }
}

export default TypoPalette;
