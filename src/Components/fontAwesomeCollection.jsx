import React, { Component } from "react";

class FAIcons extends Component {
  render() {
    return (
      <div>
        <div className="icon-collection">
          <ul>
            <li>{this.props.iconlabel == null ? "" : this.props.iconlabel}</li>
            <li>
              {this.props.iconCollection == null ? (
                ""
              ) : (
                <i className={this.props.iconCollection} />
              )}
            </li>
            <li>{JSON.stringify(this.props.iconCollection)}</li>
          </ul>
        </div>
        <p />
      </div>
    );
  }
}

export default FAIcons;
