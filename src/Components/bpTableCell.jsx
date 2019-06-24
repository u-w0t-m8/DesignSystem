import React, { Component } from "react";

class BPTableCell extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.bpRange}</td>
        <td>{this.props.portrait}</td>
        <td>{this.props.landscape}</td>
        <td> {this.props.window}</td>
        <td>{this.props.columns}</td>
        <td>{this.props.margins}</td>
      </tr>
    );
  }
}

export default BPTableCell;
