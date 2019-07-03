import React, { Component } from "react";

class PillButton extends Component {
  //parsed in styles for button
  style = {
    backgroundColor: this.props.buttonbg,
    border: this.props.bordercolor,
    color: this.props.textcolor
  };

  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      bgColor: this.props.buttonbg,
      bordercolor: this.props.bordercolor,
      textcolor: this.props.textcolor,
      hover: false
    };
    this.setState();
  }

  //get initial state of button
  getInitialState() {
    return { hover: false };
  }

  //change background colour upon hover
  toggleHoverIn() {
    console.log("hover in");
  }

  toggleHoverOut() {
    console.log("hover out");
  }
  // render button
  render() {
    return (
      <a
        href="/"
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
