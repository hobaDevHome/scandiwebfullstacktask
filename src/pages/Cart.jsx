import React, { Component } from "react";
import SelectColor from "../components/SelectColor";
import SelectSize from "../components/SelectSize";
import SelectCapacity from "../components/SelectCapacity";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.totalItemsCount = this.props.cartItems.reduce(
      (a, b) => a + b.quantity,
      0
    );
  }

  chooseColor(color) {
    console.log("sent color", color);
    // this.setState({ selectedColor: color });
  }
  chooseSize(size) {
    // this.setState({ selectedSize: size });
  }
  chooseCapacity(capacity) {
    // this.setState({ selectedCapacity: capacity });
  }
  addToCartHandler() {
    console.log("state", this.state);
  }

  render() {
    return (
      <div className="h-[630px] w-[325px] border-2 bg-rose-900">
        <div>
          {`My Bag : ${this.totalItemsCount} ${
            this.totalItemsCount > 1 ? "items" : "item"
          }`}
        </div>
        <div>
          {this.props.cartItems.map((e) => {
            let cartItemAttributesTypes = e.attributes.map((at) => at.id);
            return (
              <div>
                <p>{e.name}</p>
                <p>{e.price}</p>
                <img src={e.image} style={{ width: 50, height: 50 }} alt="" />
                <div>+</div>
                <div>-</div>
                <div className="w-[150px]">
                  {cartItemAttributesTypes.includes("Capacity") && (
                    <SelectCapacity
                      chooseCapacity={(c) => this.chooseCapacity(c)}
                      capacityObject={
                        e.attributes.filter((e) => e.id === "Capacity")[0]
                      }
                    />
                  )}
                </div>
                <div className="w-[150px]">
                  {cartItemAttributesTypes.includes("Color") && (
                    <SelectColor
                      chooseColor={(c) => this.chooseColor(c)}
                      colorsObject={
                        e.attributes.filter((e) => e.id === "Color")[0]
                      }
                    />
                  )}
                </div>
                <div className="w-[150px]">
                  {cartItemAttributesTypes.includes("Size") && (
                    <SelectSize
                      chooseSize={(s) => this.chooseSize(s)}
                      sizeObject={
                        e.attributes.filter((e) => e.id === "Size")[0]
                      }
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
