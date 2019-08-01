import React, { Component } from "react";

class Checkbox extends Component {
  //test props
  constructor(props) {
    super(props);
    console.log(
      "label [" +
        this.props.label +
        "] checkbox id [" +
        this.props.uniqueID +
        "]"
    );
  }
  render() {
    return (
      <div className="check-wrapper">
        <form>
          <input
            type="checkbox"
            id={this.props.uniqueID}
            className="checkbox"
          />
          <span>{this.props.label}</span>
        </form>
      </div>
    );
  }
}

export default Checkbox;
