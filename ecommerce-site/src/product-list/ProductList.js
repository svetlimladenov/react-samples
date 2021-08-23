import React, { Fragment, Component } from "react";
import "./style.css";
import ProductCard from "../product-card/ProductCard";
import Header from "../header/Header";

const renderCards = (products) => {
  return products.map((product) => {
    return <ProductCard key={product.id} {...product} />;
  });
};

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <Fragment>
        <Header />
        <div className="container">{renderCards(products)}</div>
      </Fragment>
    );
  }
}

export default ProductList;
