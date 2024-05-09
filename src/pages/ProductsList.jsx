import React, { Component } from "react";
import ProductCard from "../components/ProductCard";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className=" mt-5  pb-10">
        <h2 className="text-3xl mb-12 mt-10">
          {getTitle(this.props.category)}
        </h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center m-2 ">
          {this.props.products &&
            this.props.products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
function getTitle(category) {
  if (category === "all") {
    return "All Products";
  } else if (category === "clothes") {
    return "Clothes Products";
  } else if (category === "tech") {
    return "Tech Products";
  } else {
    return "";
  }
}
