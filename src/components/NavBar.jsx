import React, { Component } from "react";
import logo from "../images/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartModal: false,
      selectedCategory: "women",
    };
  }
  chooseCategory(category) {
    this.setState({ selectedCategory: category });
    this.props.setCategory(category);
  }

  render() {
    return (
      <div className="w-full flex justify-between mt-4">
        <div>
          <ul className="flex ">
            <li
              onClick={() => this.chooseCategory("women")}
              className={`mr-5 cursor-pointer ${
                this.state.selectedCategory === "women"
                  ? " text-regal-green border-b-2 border-emerald-500 pb-4 px-3"
                  : "text-black border-0 hover:text-regal-green hover:border-b-2 hover:border-emerald-500 pb-4 px-3"
              }`}
            >
              Women
            </li>
            <li
              onClick={() => this.chooseCategory("men")}
              className={`mr-5 cursor-pointer ${
                this.state.selectedCategory === "men"
                  ? " text-regal-green border-b-2 border-emerald-500 pb-4 px-3"
                  : "text-black border-0 hover:text-regal-green hover:border-b-2 hover:border-emerald-500 pb-4 px-3"
              }`}
            >
              Men
            </li>
            <li
              onClick={() => this.chooseCategory("kids")}
              className={`mr-5 cursor-pointer ${
                this.state.selectedCategory === "kids"
                  ? " text-regal-green border-b-2 border-emerald-500 pb-4 px-3"
                  : "text-black border-0 hover:text-regal-green hover:border-b-2 hover:border-emerald-500 pb-4 px-3"
              }`}
            >
              Kids
            </li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="logo" style={{ width: 41, height: 41 }} />
        </div>
        <div>
          <AiOutlineShoppingCart fontSize={20} />
          <div className="w-4 h-4 rounded-full bg-red">3</div>
        </div>
      </div>
    );
  }
}
