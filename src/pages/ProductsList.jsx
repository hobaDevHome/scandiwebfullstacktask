import React, { Component } from "react";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.selectedCategory);
    return (
      <div>
        {this.props.selectedCategory} <div></div>
      </div>
    );
  }
}
