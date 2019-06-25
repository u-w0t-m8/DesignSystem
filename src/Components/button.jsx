import React, { Component } from "react";

class Button extends Component {
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
    console.log("[" + this.state.label + "]");
  }
  getInitialState() {
    return { hover: false };
  }
  toggleHover() {
    this.setState();
    // this.setState({ hover: !this.state.hover });
  }

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

export default Button;
