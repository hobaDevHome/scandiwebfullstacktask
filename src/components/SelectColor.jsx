import React, { Component } from "react";

export default class SelectColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "",
    };
  }
  chooseColor(color) {
    this.setState({ selectedColor: color });
    this.props.chooseColor(color);
  }
  colorsObject = {
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
          Color:
        </div>
        <div className="flex gap-2">
          {this.colorsObject.items.map((color) => (
            <div
              className={`w-[40px] h-[40px] bg-white
              
               ${
                 this.state.selectedColor === color.value
                   ? "border-[#5ECE7B] border-2"
                   : " hover:border-2 hover:border-[#5ECE7B]"
               }
               
               flex justify-center items-center cursp`}
              onClick={() => this.chooseColor(color.value)}
            >
              <div
                className="w-[32px] h-[32px]"
                style={{ backgroundColor: color.value }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
