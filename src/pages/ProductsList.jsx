import React, { Component } from "react";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.products.map((product) => (
          <h2>{product.name}</h2>
        ))}
      </div>
    );
  }
}
