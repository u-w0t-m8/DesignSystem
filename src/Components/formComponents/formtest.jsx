import React, { Component } from "react";

class Formtest extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <form id="create-course-form">
          <div>
            <input
              type="text"
              name="course_Name"
              ref="fieldName"
              className="form-field"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Formtest;
