import React from "react";
import ProductList from "./product-list/ProductList";
import data from "./data";

function App() {
  return <ProductList products={data} />;
}

export default App;
