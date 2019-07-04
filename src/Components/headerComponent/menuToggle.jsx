import React, { Component } from "react";
import SideDraw from "./sideDraw";
import Backdrop from "./backdrop";

class MenuToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("clicked");
  }

  render() {
    return (
      <button className="menu-toggle" onClick={this.handleClick}>
        <div className="togglebuttonline" />
        <div className="togglebuttonline" />
        <div className="togglebuttonline" />
        {this.state.isToggleOn ? (
          ""
        ) : (
          <div>
            <SideDraw /> <Backdrop />
          </div>
        )}
      </button>
    );
  }
}

export default MenuToggleButton;
