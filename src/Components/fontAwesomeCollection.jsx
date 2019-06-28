import React, { Component } from "react";

class FAIcons extends Component {
  render() {
    return (
      <div>
        <div className="icon-collection">
          <ul>
            <li className="subtext">
              {this.props.iconlabel == null ? "" : this.props.iconlabel}
            </li>
            <li>
              {this.props.iconCollection == null ? (
                ""
              ) : (
                <span>
                  <i className={this.props.iconCollection} />{" "}
                  <code>{JSON.stringify(this.props.iconCollection)}</code>
                </span>
              )}
            </li>
          </ul>
        </div>
        <p />
      </div>
    );
  }
}

export default FAIcons;
