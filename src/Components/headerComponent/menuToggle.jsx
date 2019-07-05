import React, { Component } from "react";
import SideDraw from "./sideDraw";
import Backdrop from "./backdrop";

class MenuToggleButton extends Component {
  constructor(props) {
    super(props);
    //initialise isMenuOpen
    this.state = { isMenuOpen: false };
    //Bind handle click
    this.handleClick = this.handleClick.bind(this);
  }

  //tip use a function in setState
  //React does not guarentee state changes are applied immediately
  //this.state may not be what you think it is

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
      <button className="menu-toggle" onClick={() => this.handleClick()}>
        <div className="togglebuttonline" />
        <div className="togglebuttonline" />
        <div className="togglebuttonline" />
        {/* checks to see if the Menu state is true or false */}
        {this.state.isMenuOpen ? (
          // if menu state is true, render side draw and backdrop
          <div>
            <SideDraw />
            <Backdrop />
          </div>
        ) : //else if menu is closed do not render anything return null
        null}
      </button>
    );
  }
}

export default MenuToggleButton;
