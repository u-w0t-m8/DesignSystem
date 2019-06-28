import React, { Component } from "react";

class FAIcons extends Component {
  render() {
    return (
      <div className="icon-component col-md-3">
        <div className="icon-collection row">
          <div className="subtext col-md-12">
            {this.props.iconlabel == null ? "" : this.props.iconlabel}
          </div>
          <div>
            {this.props.iconCollection == null ? (
              ""
            ) : (
              <div className="col-md-12">
                <i className={this.props.iconCollection} />{" "}
                <code>{JSON.stringify(this.props.iconCollection)}</code>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FAIcons;
