import React from "react";
import "./product-list.css";
import "./App.css";
import Product from "./product/Product";
import Timer from "./timer/Timer";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      timerToggled: true
    };

    this.handleTimerToggle = this.handleTimerToggle.bind(this);
  }

  handleTimerToggle() {
    this.setState((state) => {
      return {
        timerToggled: !state.timerToggled
      };
    });
  }

  render() {
    const { product } = this.props;

    return (
      <div className="container">
        <Product product={product} />
        <input type="checkbox" onChange={this.handleTimerToggle} />
        {this.state.timerToggled && <Timer />}
      </div>
    );
  }
}

export default ProductList;
