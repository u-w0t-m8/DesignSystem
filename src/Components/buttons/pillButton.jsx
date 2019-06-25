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
      bgColor: this.props.buttonbg
    };
    console.log(this.state.label + " " + this.state.bgColor);
  }

  //get initial state of button
  getInitialState() {
    return { hover: false };
  }

  //change background colour upon hover
  toggleHover() {
    //this.setState();
    //this.setState({ hover: !this.state.hover });
  }

  // render button
  render() {
    return (
      <div
        className="button"
        style={{
          backgroundColor: this.props.buttonbg,
          color: this.props.textColour,
          borderRadius: "50px",
          maxWidth: "200px",
          margin: "0.5em"
        }}
      >
        <div
          className="label"
          style={{
            padding: "1em",
            textAlign: "center",
            textTransform: "uppercase"
          }}
        >
          <a onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            {this.props.buttonlabel != null ? "" : this.props.label}
          </a>
        </div>
      </div>
    );
  }
}

export default PillButton;
