import React, { Component } from "react";

class RectangleButtons extends Component {
  style = {
    backgroundColor: this.props.buttonbg,
    border: this.props.bordercolor,
    color: this.props.color
  };

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.props.buttonbg
    };
  }

  //Toggle action functions
  toggleHoverIn() {
    console.log("hover in rectangle");
  }

  toggleHoverOut() {
    console.log("hover out rectangle");
  }

  /**** render button *****/

  render() {
    return (
      <a
        href="\layout"
        onMouseEnter={this.toggleHoverIn}
        onMouseLeave={this.toggleHoverOut}
        className="rekt-button"
        style={{
          backgroundColor: this.props.buttonbg,
          border: "3px solid" + this.props.bordercolor
        }}
      >
        <span className="label" style={{ color: this.props.color }}>
          {this.props.buttonlabel != null ? "" : this.props.label}
        </span>
      </a>
    );
  }
}

export default RectangleButtons;
