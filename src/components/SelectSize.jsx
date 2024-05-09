import React, { Component } from "react";

export default class SelectSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: "",
    };
  }
  chooseSize(size) {
    this.setState({ selectedSize: size });
    this.props.chooseSize(size);
  }
  sizeObject = {
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
  };
  render() {
    return (
      <div>
        <div
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#1D1F22",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Size:
        </div>
        <div className="flex gap-2">
          {this.sizeObject.items.map((size) => (
            <div
              className={`w-[63px] h-[45px] bg-white border-2
              
               ${
                 this.state.selectedSize === size.value
                   ? "bg-[#000] text-[#fff]"
                   : "hover:bg-[#000] hover:text-[#fff] ]"
               }
               
               flex justify-center items-center cursp`}
              onClick={() => this.chooseSize(size.value)}
            >
              {size.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
