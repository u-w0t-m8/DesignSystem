import React, { Component } from "react";
import TextInput from "../Components/textInput";

class FormComponent extends Component {
  state = {};
  constructor() {
    super();

    this.state = {
      formControls: {
        name: {
          value: "",
          placeholder: "What is your name"
        }
      }
    };
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        [name]: value
      }
    });
  };

  render() {
    return (
      <TextInput
        name="name"
        placeholder={this.state.formControls.name.placeholder}
        value={this.state.formControls.name.value}
        onChange={this.changeHandler}
      />
    );
  }
}

export default FormComponent;
