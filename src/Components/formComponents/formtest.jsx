import React, { Component } from "react";

class Formtest extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <form id="create-course-form">
          <div className="form-field">
            <input type="text" name="course_Name" ref="fieldName" />
          </div>
          <div className="form-field">
            <input type="text" name="course_org" ref="fieldOrg" />
          </div>
          <div className="form-field">
            <input type="text" name="course_Number" ref="fieldNum" />
          </div>
          {/* <input type="submit" name="saveCourse" value="Create" />
          <input
            type="button"
            name="cancelCourse"
            value="cancel"
            onClick={this.cancelCourse}
          /> */}
        </form>
      </div>
    );
  }
}

export default Formtest;
