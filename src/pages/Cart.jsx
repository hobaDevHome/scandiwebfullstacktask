import React, { Component } from "react";
import SelectColor from "../components/SelectColor";
import SelectSize from "../components/SelectSize";
import SelectCapacity from "../components/SelectCapacity";
import GreenButton from "../components/GreenButton";
import "../App.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.totalItemsCount = this.props.cartItems.reduce(
      (a, b) => a + b.quantity,
      0
    );
  }

  render() {
    return (
      <div className="cart-container ">
        <div className="mt-6 text-md font-bold mb-6">
          My Bag:{" "}
          <span className="font-normal">
            {this.totalItemsCount}
            {`${this.totalItemsCount > 1 ? "items" : "item"}`}
          </span>
        </div>
        <div>
          {this.props.cartItems.map((e) => {
            return (
              <div>
                <CartItem item={e} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between font-bold">
          <div>Total:</div>
          <div>
            $
            {
              (this.totalItemsCount = this.props.cartItems.reduce(
                (a, b) => a + b.quantity * b.price,
                0
              ))
            }
          </div>
        </div>
        <div className="w-full mt-6 h-[43px] flex justify-center items-center">
          <GreenButton label={"Place order"} />
        </div>
      </div>
    );
  }
}

export class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  chooseColor(color) {
    console.log("sent color", color);
    // this.setState({ selectedColor: color });
  }
  chooseSize(size) {
    console.log("sent size", size);
    // this.setState({ selectedSize: size });
  }
  chooseCapacity(capacity) {
    console.log("sent capacity", capacity);
    // this.setState({ selectedCapacity: capacity });
  }
  addToCartHandler() {
    console.log("state", this.state);
  }
  cartItemAttributesTypes = this.props.item.attributes.map((at) => at.id);
  render() {
    return (
      <div className="flex mb-8">
        <div>
          <div className="w-[140px]">
            <p className="text-md">{this.props.item.name}</p>
          </div>
          <p className="text-md font-normal mt-2">
            ${this.props.item.price.toFixed(2)}
          </p>
          <div>
            {this.cartItemAttributesTypes.includes("Capacity") && (
              <SelectCapacity
                inCart={true}
                chooseCapacity={(c) => this.chooseCapacity(c)}
                capacityObject={
                  this.props.item.attributes.filter(
                    (e) => e.id === "Capacity"
                  )[0]
                }
              />
            )}
          </div>
          <div className="w-[150px]">
            {this.cartItemAttributesTypes.includes("Color") && (
              <SelectColor
                inCart={true}
                chooseColor={(c) => this.chooseColor(c)}
                colorsObject={
                  this.props.item.attributes.filter((e) => e.id === "Color")[0]
                }
              />
            )}
          </div>
          <div className="w-[150px]">
            {this.cartItemAttributesTypes.includes("Size") && (
              <SelectSize
                inCart={true}
                chooseColor={(c) => this.chooseSize(c)}
                sizeObject={
                  this.props.item.attributes.filter((e) => e.id === "Size")[0]
                }
              />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between mr-2">
          <div className="w-[24px] h-[24px] bg-[#fff] border-2 cursor-pointer text-2xl flex justify-center items-center">
            +
          </div>
          <div>{this.props.item.quantity}</div>
          <div className="w-[24px] h-[24px] bg-[#fff] border-2 cursor-pointer text-2xl flex justify-center items-center">
            -
          </div>
        </div>
        <div>
          <img
            src={this.props.item.image}
            style={{ width: 120, height: 170 }}
            alt=""
          />
        </div>
      </div>
    );
  }
}
