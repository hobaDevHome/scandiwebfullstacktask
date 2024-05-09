import React, { Component } from "react";

export default class SelectCapacity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCapacity: "",
    };
  }
  chooseCapacity(capacity) {
    this.setState({ selectedCapacity: capacity });
    this.props.chooseCapacity(capacity);
  }
  capacityObject = {
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
          Capacity:
        </div>
        <div className="flex gap-2">
          {this.capacityObject.items.map((capacity) => (
            <div
              className={`w-[80px] h-[45px] bg-white border-2
              
               ${
                 this.state.selectedCapacity === capacity.value
                   ? "bg-[#000] text-[#fff]"
                   : "hover:bg-[#000] hover:text-[#fff] ]"
               }
               
               flex justify-center items-center cursp`}
              onClick={() => this.chooseCapacity(capacity.value)}
            >
              {capacity.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
