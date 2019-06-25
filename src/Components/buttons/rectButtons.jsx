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
      <div
        className="rekt-button"
        style={{ backgroundColor: this.props.buttonbg }}
      >
        <div className="label">
          <a onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            {this.props.buttonlabel != null ? "" : this.props.label}
          </a>
        </div>
      </div>
    );
  }
}

export default RectangleButtons;
