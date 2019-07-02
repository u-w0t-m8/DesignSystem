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
  }

  //get initial state of button
  getInitialState() {
    return { hover: false };
  }

  //change background colour upon hover
  toggleHover() {
    this.setState();
  }

  // render button
  render() {
    return (
      <a
        onMouseEnter={this.toggleHover}
        //onMouseLeave={this.toggleHover}
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
