import React, { Component } from "react";

class Button extends Component {
  style = {
    backgroundColor: this.props.buttonbg,
    border: "1px solid" + this.props.bordercolor,
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
  render() {
    return (
      <div className="button">
        <div className="label">
          {this.props.buttonlabel == null ? " " : this.props.buttonlabel}
        </div>
      </div>
    );
  }
}

export default Button;
