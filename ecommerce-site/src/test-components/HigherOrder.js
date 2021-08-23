import React from "react";

function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log("Component mounted");
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

class Header extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const WrapperHeader = withLogging(Header);
WrapperHeader.displayName = `WithLogging(${getDisplayName(WrapperHeader)})`;

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default WrapperHeader;
