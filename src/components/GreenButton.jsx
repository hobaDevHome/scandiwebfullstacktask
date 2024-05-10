import React, { Component } from "react";

export default class GreenButton extends Component {
  render() {
    return (
      <div className="w-80 p-4 mt-4 mb-4 flex justify-center items-center text-[#fff] bg-regal-green cursor-pointer">
        {this.props.label.toUpperCase()}
      </div>
    );
  }
}
