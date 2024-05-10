import React, { Component } from "react";
import logo from "../images/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";

const categories = ["all", "clothes", "tech"];
const cartItems = [
  {
    id: "huarache-x-stussy-le",
    name: "Nike Air Huarache Le",

    image:
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",

    attributes: [
      {
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
      },
    ],
    price: 144.69,
    quantity: 1,
  },
  {
    id: "jacket-canada-goosee",
    name: "Jacket",

    image:
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",

    attributes: [
      {
        id: "Size",
        items: [
          {
            displayValue: "Small",
            value: "S",
            id: "Small",
            __typename: "Attribute",
          },
          {
            displayValue: "Medium",
            value: "M",
            id: "Medium",
            __typename: "Attribute",
          },
          {
            displayValue: "Large",
            value: "L",
            id: "Large",
            __typename: "Attribute",
          },
          {
            displayValue: "Extra Large",
            value: "XL",
            id: "Extra Large",
            __typename: "Attribute",
          },
        ],
        name: "Size",
        type: "text",
        __typename: "AttributeSet",
      },
      {
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
      },
    ],
    price: 518.47,
    quantity: 2,
  },
];

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
      <div className="w-full flex justify-between mt-4 relative">
        <div className="absolute top-4 right-0">
          <Cart cartItems={cartItems} />
        </div>
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
