import React from "react";
import ProductList from "./ProductList";
import data from "./data";

function App() {
  return <ProductList product={data[0]} counter={2} />;
}

export default App;
