import React from "react";
import Container from "./Container";
import Button from "./Button";
import StepInput from "./StepInput";
import Row from "./Row";

class TestApp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Harry",
      lastName: "Potter",
      step: 1
    };

    this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
  }

  handleStepInput(e) {
    this.setState({ step: Number(e.target.value) });
  }

  handleFirstNameInput(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameInput(e) {
    this.setState({ lastName: e.target.value });
  }

  componentDidMount() {
    document.title = `${this.state.firstName} ${this.state.lastName}`;
  }

  componentDidUpdate() {
    document.title = `${this.state.firstName} ${this.state.lastName}`;
  }

  render() {
    console.log("rendered", "TestApp");
    return (
      <div>
        <Container>
          <Row>
            <h1>Step Demo</h1>
            <StepInput onStepInput={(e) => this.handleStepInput(e)} />
            <Button step={this.state.step} />
          </Row>
          <Row>
            <label>First Name: </label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstNameInput}
            />
          </Row>
          <Row>
            <label>Second Name: </label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameInput}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default TestApp;
