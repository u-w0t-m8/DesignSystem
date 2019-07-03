import React, { Component } from "react";

class IconButton extends Component {
  state = { icon: this.props.icon };

  constructor(props) {
    super(props);
    console.log(this.props.icon);
  }

  render() {
    return (
      <div
        className="icon-button"
        style={{
          backgroundColor: this.props.bgcolor,
          color: this.props.color
        }}
      >
        <i className={this.props.icon} />
      </div>
    );
  }
}

export default IconButton;
