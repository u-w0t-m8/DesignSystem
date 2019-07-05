import React, { Component } from "react";
import SideDraw from "./sideDraw";
import Backdrop from "./backdrop";
import sideDraw from "./sideDraw";

class MenuToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));

    if (this.state.isMenuOpen) {
      console.log("あらー、　見つけました！　よくできました！");
      console.log("メニュー　を　開ける。");
    } else {
      console.log("メニュー　を　閉める。");
    }
  }

  render() {
    return (
      <button className="menu-toggle" onClick={this.handleClick}>
        <div className="togglebuttonline" />
        <div className="togglebuttonline" />
        <div className="togglebuttonline" />
        {this.state.isMenuOpen ? (
          <div>
            <SideDraw />
            <Backdrop />
          </div>
        ) : null}
      </button>
    );
  }
}

export default MenuToggleButton;
