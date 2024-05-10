import React, { Component, Fragment, createRef } from "react";
import { Link } from "react-router-dom";
import SelectColor from "../components/SelectColor";
import SelectSize from "../components/SelectSize";
import SelectCapacity from "../components/SelectCapacity";
import GreenButton from "../components/GreenButton";
import ProductGallery from "../components/ProductGallery";
import Carousel from "../components/Carousel";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: "",
      selectedSize: "",
      selectedCapacity: "",
    };

    this.descriptionRef = createRef();
  }

  componentDidMount() {
    let htmlString = this.product.description;
    this.descriptionRef.current.innerHTML = htmlString;
  }
  product = {
    id: "apple-iphone-12-pro",
    name: "iPhone 12 Pro",
    inStock: true,
    gallery: [
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
    ],
    description:
      "<p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>",
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
      {
        id: "Size",
        items: [
          {
            displayValue: "40",
            value: "40",
            id: "40",
            __typename: "Attribute",
          },
          {
            displayValue: "41",
            value: "41",
            id: "41",
            __typename: "Attribute",
          },
          {
            displayValue: "42",
            value: "42",
            id: "42",
            __typename: "Attribute",
          },
          {
            displayValue: "43",
            value: "43",
            id: "43",
            __typename: "Attribute",
          },
        ],
        name: "Size",
        type: "text",
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
    console.log("sent color", color);
    this.setState({ selectedColor: color });
  }
  chooseSize(size) {
    this.setState({ selectedSize: size });
  }
  chooseCapacity(capacity) {
    this.setState({ selectedCapacity: capacity });
  }
  addToCartHandler() {
    console.log("state", this.state);
  }

  render() {
    return (
      <div className="mt-10 flex gap-2">
        <div className="w-3/5 pt-4">
          <Carousel imagesList={this.product.gallery} />
        </div>
        <div className="w-2/5 pt-4 pl-8">
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
            {this.attributesTypes.includes("Capacity") && (
              <SelectCapacity
                chooseCapacity={(c) => this.chooseCapacity(c)}
                capacityObject={
                  this.product.attributes.filter((e) => e.id === "Capacity")[0]
                }
              />
            )}
            {this.attributesTypes.includes("Color") && (
              <SelectColor
                chooseColor={(c) => this.chooseColor(c)}
                colorsObject={
                  this.product.attributes.filter((e) => e.id === "Color")[0]
                }
              />
            )}
            {this.attributesTypes.includes("Size") && (
              <SelectSize
                chooseSize={(s) => this.chooseSize(s)}
                sizeObject={
                  this.product.attributes.filter((e) => e.id === "Size")[0]
                }
              />
            )}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#1D1F22",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <div className="mt-6 mb-6">Price:</div>
            <div style={{ fontSize: 24 }}>
              ${this.product.prices[0].amount.toFixed(2)}
            </div>
          </div>
          <div onClick={() => this.addToCartHandler()}>
            <GreenButton label={"Add to cart"} />
          </div>
          <div
            className="w-80 mt-10"
            style={{ fontSize: 16 }}
            ref={this.descriptionRef}
          ></div>
        </div>
      </div>
    );
  }
}
