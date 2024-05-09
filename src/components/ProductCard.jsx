import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";
export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = { noOfItmesInCart: 1, showProcutDetails: false };
  }
  product = this.props.product;
  price = this.product.prices[0].amount.toFixed(2);
  render() {
    console.log(this.product.inStock);
    return (
      <div className="hover:shadow-xl p-1">
        <div className="relative">
          <Link to={`/products/${this.product.id}`} className="p-0">
            <img
              className="w-[330px] h-[330px] object-cover object-top p-0 m-auto  "
              src={this.product.gallery[0]}
              alt=""
              style={{ border: "1px solid rgb(229 229 229)", borderRadius: 4 }}
            />
            {this.product.inStock && (
              <div className="w-[52px] h-[52px] rounded-full bg-regal-green flex justify-center items-center absolute right-8 bottom-[-26px]">
                <AiOutlineShoppingCart fontSize={28} color="white" />
              </div>
            )}
            {!this.product.inStock && (
              <div
                className="absolute left-0 top-0 w-full h-full flex justify-center items-center "
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              >
                <p style={{ color: "#8D8F9A", fontSize: 24 }}>OUT OF STOCK</p>
              </div>
            )}
          </Link>
        </div>
        <div className="w-[330px] m-auto">
          <div
            style={{
              fontSize: 18,
              color: "#1D1F22",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {this.product.name}
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#1D1F22",
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            ${this.price}
          </div>
        </div>
      </div>
    );
  }
}
