import React from "react";

class StepInput extends React.Component {
  render() {
    const { onStepInput } = this.props;
    return <input onChange={onStepInput}></input>;
  }
}

export default StepInput;
