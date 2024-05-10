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
  sizeObject = this.props.sizeObject;
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
