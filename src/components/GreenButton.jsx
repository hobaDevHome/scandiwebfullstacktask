import React, { Component } from "react";

export default class GreenButton extends Component {
  render() {
    return (
      <div className="w-full h-full flex justify-center items-center text-[#fff] bg-regal-green cursor-pointer">
        {this.props.label.toUpperCase()}
      </div>
    );
  }
}
