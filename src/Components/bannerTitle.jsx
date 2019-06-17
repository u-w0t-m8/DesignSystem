import React, { Component } from "react";

class Banner extends Component {
  state = { bannerImg: this.state.props };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.state.props.title}</h1>
        <h4>{this.state.props.subtitle}</h4>
      </div>
    );
  }
}

export default Banner;
