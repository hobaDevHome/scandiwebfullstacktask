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
  colorsObject = this.props.colorsObject;
  render() {
    return (
      <div>
        <div
          style={{
            fontSize: 18,
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
