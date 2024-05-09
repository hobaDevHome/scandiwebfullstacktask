import "./App.css";
import { Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";
import { data } from "./data/data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setCategory = this.setCategory.bind(this);
    this.state = {
      selectedCategory: "all",
      products: data.data.products,
    };
  }
  setCategory(category) {
    this.setState({
      selectedCategory: category,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (data.data.products.length > 0) {
      let temp;
      if (this.state.selectedCategory !== "all") {
        temp = data.data.products.filter(
          (product) => product.category === this.state.selectedCategory
        );
      } else {
        temp = data.data.products;
      }
      if (prevState.products.length !== temp.length) {
        this.setState({
          products: temp,
        });
      }
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar setCategory={this.setCategory} />
        <Routes>
          <Route
            index
            element={<ProductsList products={this.state.products} />}
          />

          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    );
  }
}
