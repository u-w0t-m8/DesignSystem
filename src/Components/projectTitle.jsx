import React, { Component } from "react";

class ProjectTitle extends Component {
  state = {
    logo: this.props.logo,
    title: this.props.title
  };
  constructor(props) {
    super(props);
    console.log(this.props.title);
  }

  render() {
    return (
      <div className="project-title">
        <img src={this.props.logo} alt="logo" />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default ProjectTitle;
