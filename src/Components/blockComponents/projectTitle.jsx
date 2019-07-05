import React, { Component } from "react";

class ProjectTitle extends Component {
  state = {
    logo: this.props.logo,
    title: this.props.title
  };

  render() {
    return (
      <div className="project-title">
        {this.props.logo == null ? (
          " "
        ) : (
          <img src={this.props.logo} alt="logo" />
        )}
        {this.props.title == null ? " " : <h3>{this.props.title}</h3>}
      </div>
    );
  }
}

export default ProjectTitle;
