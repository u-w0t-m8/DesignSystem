import React, { Component } from "react";

class ProjectTitle extends Component {
  state = {
    logo: this.props.logo,
    title: this.props.title
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     logo: null,
  //     title: null
  //   };

  //   if (this.props.logo != null) {
  //     this.state.logo = this.props.logo;
  //   }

  //   if (this.props.title != null) {
  //     this.state.title = this.props.title;
  //   }
  // }

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
