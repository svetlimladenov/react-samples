import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((state) => {
        return { counter: state.counter + 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("unmounting the timer");
    clearInterval(this.timerId);
  }

  render() {
    return <div className="timer">{this.state.counter}</div>;
  }
}

export default Timer;
