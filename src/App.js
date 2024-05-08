import "./App.css";
import { Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setCategory = this.setCategory.bind(this);
    this.state = {
      selectedCategory: "",
    };
  }
  setCategory(category) {
    // console.log(category);
    this.setState({
      selectedCategory: category,
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar setCategory={this.setCategory} />
        <Routes>
          <Route
            index
            element={
              <ProductsList selectedCategory={this.state.selectedCategory} />
            }
          />

          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    );
  }
}
