import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Click me",
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      (state, props) => {
        return { counter: state.counter + props.step };
      },
      () => {
        console.log("state updated");
      }
    );
  }

  componentDidUpdate() {
    console.log("componend did update");
  }

  render() {
    console.log("rendered", "Button");
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
        <h4>{this.state.counter}</h4>
      </div>
    );
  }
}

export default Button;
