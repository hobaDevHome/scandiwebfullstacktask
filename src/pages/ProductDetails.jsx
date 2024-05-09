import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectColor from "../components/SelectColor";

export default class ProductDetails extends Component {
  product = {
    id: "apple-iphone-12-pro",
    name: "iPhone 12 Pro",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    ],
    description: "This is iPhone 12. Nothing else to say.",
    category: "tech",
    attributes: [
      {
        id: "Capacity",
        items: [
          {
            displayValue: "512G",
            value: "512G",
            id: "512G",
            __typename: "Attribute",
          },
          {
            displayValue: "1T",
            value: "1T",
            id: "1T",
            __typename: "Attribute",
          },
        ],
        name: "Capacity",
        type: "text",
        __typename: "AttributeSet",
      },
      {
        id: "Color",
        items: [
          {
            displayValue: "Green",
            value: "#44FF03",
            id: "Green",
            __typename: "Attribute",
          },
          {
            displayValue: "Cyan",
            value: "#03FFF7",
            id: "Cyan",
            __typename: "Attribute",
          },
          {
            displayValue: "Blue",
            value: "#030BFF",
            id: "Blue",
            __typename: "Attribute",
          },
          {
            displayValue: "Black",
            value: "#000000",
            id: "Black",
            __typename: "Attribute",
          },
          {
            displayValue: "White",
            value: "#FFFFFF",
            id: "White",
            __typename: "Attribute",
          },
        ],
        name: "Color",
        type: "swatch",
        __typename: "AttributeSet",
      },
    ],
    prices: [
      {
        amount: 1000.76,
        currency: {
          label: "USD",
          symbol: "$",
          __typename: "Currency",
        },
        __typename: "Price",
      },
    ],
    brand: "Apple",
    __typename: "Product",
  };
  attributesTypes = this.product.attributes.map((at) => at.id);

  chooseColor(color) {
    console.log("color", color);
  }
  render() {
    // console.log(this.product.attributes.filter((e) => e.id === "Color"));
    return (
      <div className="mt-10 flex gap-2">
        <div className="w-3/5 border-2">gallery</div>
        <div className="w-2/5 border-2 p-4">
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#1D1F22",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {this.product.name}
          </div>
          <div>
            <SelectColor chooseColor={this.chooseColor} />
          </div>
        </div>
      </div>
    );
  }
}
