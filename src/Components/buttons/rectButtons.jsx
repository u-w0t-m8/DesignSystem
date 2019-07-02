import React, { Component } from "react";

class RectangleButtons extends Component {
  style = {
    backgroundColor: this.props.buttonbg,
    border: this.props.bordercolor,
    color: this.props.textcolor
  };
  state = {};
  render() {
    return (
      <a
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        className="rekt-button"
        style={{
          backgroundColor: this.props.buttonbg,
          border: "2px solid" + this.props.bordercolor
        }}
      >
        <span className="label" style={{ color: this.props.textcolor }}>
          {this.props.buttonlabel != null ? "" : this.props.label}
        </span>
      </a>
    );
  }
}

export default RectangleButtons;
