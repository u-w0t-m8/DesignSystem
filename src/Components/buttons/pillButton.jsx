import React, { Component } from "react";

class PillButton extends Component {
  //parsed in styles for button

  style = {
    backgroundColor: this.props.buttonbg,
    border: this.props.bordercolor,
    color: this.props.textcolor
  };
  //get initial state of button
  state = {
    hover: false
  };

  // constructor(props) {
  //   super(props);
  // }
  //change background colour upon hover
  toggleHoverIn() {
    console.log("hover in pill");
  }

  toggleHoverOut() {
    console.log("hover out pill");
  }
  // render button
  render() {
    return (
      <a
        href="/layout"
        onMouseEnter={this.toggleHoverIn}
        onMouseLeave={this.toggleHoverOut}
        className="button"
        style={{
          backgroundColor: this.props.buttonbg,
          border: "3px solid" + this.props.bordercolor,
          color: this.props.color
        }}
      >
        <span className="label">
          {this.props.buttonlabel != null ? "" : this.props.label}
        </span>
      </a>
    );
  }
}

export default PillButton;
