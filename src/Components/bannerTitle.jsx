import React, { Component } from "react";
//Page banner component
class Banner extends Component {
  state = {
    bannerImgURL: this.props.bannerImg,
    title: this.props.title,
    subheading: this.props.subheading
  };

  render() {
    return (
      <div className="title">
        <div
          className="banner"
          style={{ backgroundImage: `url(${this.props.bannerImg})` }}
        >
          <div className="title">
            <h1>{this.props.title}</h1>
            <h4>{this.props.subheading}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
