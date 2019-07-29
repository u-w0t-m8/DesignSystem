import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="checkbox" className="checkbox" />
          <label>{this.props.label}</label>
        </form>
      </div>
    );
  }
}

export default Checkbox;
