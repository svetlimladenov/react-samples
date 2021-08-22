import React from "react";

class TimerWrapper extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counterProp: {
        counter: 1
      }
    };
  }

  componentDidMount() {
    setInterval(() => {
      const counterProp = Object.assign({}, this.state.counterProp);
      counterProp.counter += 1;
      this.setState({ counterProp: counterProp });
    }, 1000);
  }

  render() {
    return <div>{this.state.counterProp.counter}</div>;
  }
}

export default TimerWrapper;
