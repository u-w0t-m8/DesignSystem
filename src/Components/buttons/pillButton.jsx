import React, { Component } from "react";

class PillButton extends Component {
  //parsed in styles for button
  constructor(props) {
    super(props);
    this.state = { hover: false };
    // this.toggleHoverIn = this.toggleHoverIn.bind(this);
    // this.toggleHoverOut = this.toggleHoverOut.bind(this);
  }

  toggleHoverIn() {
    // this.setState((prevState, props) => {
    //   return {
    //     toggleHoverIn: !prevState.toggleHoverIn
    //   };
    // });
    console.log("pill hover IN = ");
  }

  toggleHoverout() {
    // this.setState((prevState, props) => {
    //   return { toggleHoverOut: !prevState.toggleHoverOut };
    // });
    console.log("pill hover OUT");
  }
  /**** render button *****/

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
