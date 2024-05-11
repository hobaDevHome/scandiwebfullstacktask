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
            fontSize: this.props.inCart ? 14 : 18,
            fontWeight: this.props.inCart ? "normal" : "bold",
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
              style={{
                backgroundColor: "white",
                width: this.props.inCart ? 24 : 40,
                height: this.props.inCart ? 24 : 40,
              }}
              className={`
              
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
                style={{
                  backgroundColor: color.value,
                  width: this.props.inCart ? 18 : 32,
                  height: this.props.inCart ? 18 : 32,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
