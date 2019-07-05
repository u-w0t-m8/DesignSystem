import React, { Component } from "react";

class PillButton extends Component {
  //parsed in styles for button

  constructor(props) {
    super(props);
    this.state = { mouseOverIn: false, mouseOverOut: true };
    this.toggleHoverIn = this.toggleHoverIn.bind(this);
  }

  toggleHoverIn() {
    console.log("hover in pill");
    this.setState(state => ({
      mouseOverIn: !state.mouseOverIn
    }));
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
