import React, { Component } from "react";
import logo from "../images/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const categories = ["all", "clothes", "tech"];

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartModal: false,
      selectedCategory: "all",
    };
  }
  chooseCategory(category) {
    this.setState({ selectedCategory: category });
    this.props.setCategory(category);
  }

  render() {
    return (
      <div className="w-full flex justify-between mt-4">
        <div className="flex-1">
          <ul className="flex ">
            {categories.map((category) => (
              <Link to={`/`}>
                <li
                  onClick={() => this.chooseCategory(category)}
                  className={`mr-5 cursor-pointer ${
                    this.state.selectedCategory === category
                      ? " text-regal-green border-b-2 border-emerald-500 pb-4 px-3"
                      : "text-black border-0 hover:text-regal-green hover:border-b-2 hover:border-emerald-500 pb-4 px-3"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <img src={logo} alt="logo" style={{ width: 41, height: 41 }} />
        </div>
        <div className="relative">
          <AiOutlineShoppingCart fontSize={20} />
          <div
            className="w-4 h-4 rounded-full  absolute top-[-7px] right-[-10px] flex text-white p-0 justify-center items-center  "
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: 10,
              fontWeight: "bold",
              paddingBottom: 3,
              paddingLeft: 1,
            }}
          >
            3
          </div>
        </div>
      </div>
    );
  }
}
