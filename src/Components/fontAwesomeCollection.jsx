import React, { Component } from "react";

class FAIcons extends Component {
  render() {
    return (
      <div>
        <p>Font awesome Icon collection</p>
        <p>{this.props.icongroup == null ? "" : this.props.icongroup}</p>
        <p className="icon-collection">
          {this.props.iconCollection == null ? "" : this.props.icongroup}
        </p>
      </div>
    );
  }
}

export default FAIcons;
