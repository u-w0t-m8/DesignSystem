import React, { Component } from "react";

class TypoPalette extends Component {
  //   state = {
  //     ffamily: this.props.ffamily,
  //     transform: this.props.transform,
  //     fsize: this.props.fsize,
  //     fweight: this.props.fweight,
  //     lHeight: this.props.lheight,
  //     letterSpace: this.props.letterSpace
  //   };

  constructor(props) {
    super(props);
    let filledArray = new Array(10).fill(null).map(() => ({
      ffamily: this.props.ffamily,
      transform: this.props.transform,
      fsize: this.props.fsize,
      fweight: this.props.fweight,
      lHeight: this.props.lheight,
      letterSpace: this.props.letterSpace
    }));

    console.log(filledArray);
  }

  render() {
    return (
      <div className="font-component">
        <div
          className="title"
          style={{
            fontFamily: this.props.ffamily,
            textTransform: this.props.transform,
            fontSize: this.props.fsize,
            fontWeight: this.props.fweight,
            lineHeight: this.props.lheight,
            letterSpace: this.props.letterSpace
          }}
        >
          {this.props.fontType}
        </div>

        <div className="content-code col-md-12">
          <ul>
            <li>font-family: {this.props.ffamily};</li>
            <li>font-size: {this.props.fsize};</li>
            <li>text-transform: {this.props.transform};</li>
            <li>font-weight: {this.props.fweight};</li>
            <li>line-height: {this.props.lheight};</li>
            <li>letter-spacing: {this.props.letterSpace};</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TypoPalette;
