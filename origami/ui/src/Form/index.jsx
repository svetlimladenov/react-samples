import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      firstNameValid: true
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ firstName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInput(this.state.firstName)) {
      this.setState({ firstNameValid: false });
      return;
    }
    console.log(this.state.firstName);
  };

  render() {
    const { firstNameValid } = this.state;
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <span style={firstNameValid ? invisible : visible}>
          At least 3 characters
        </span>
        <input name="fisrtName" type="text" onChange={this.handleInput} />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

const invisible = {
  visibility: "hidden"
};

const visible = {
  visibility: "visible"
};

export default Form;

function validateInput(input) {
  if (input.length < 3) {
    return false;
  }
  return true;
}
