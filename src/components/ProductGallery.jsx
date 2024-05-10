// @ts-nocheck
import React, { Component } from "react";

import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import "./ProductGallery.css";

export default class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
      current_card: 0,
      startX: 0,
      isMouseDown: false,
      scrollLeft: 0,
    };
    this.swiperRef = React.createRef();
  }

  handleMousedown(event) {}
  handleMouseUp() {}
  handleMouseMove(parmas) {}
  handleScroll() {}
  onThumbClick(thumb) {
    // this.props.onClick(thumb);
  }
  next() {
    if (this.state.current_card < (this.props.imagesList.length - 1) / 4) {
      this.setState({ current_card: this.state.current_card + 1 }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translateY(-${
          350 * this.state.current_card
        }px)`;
      });
    }
  }
  prev() {
    if (this.state.current_card > 0) {
      this.setState({ current_card: this.state.current_card - 1 }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translateY(${
          -350 * this.state.current_card
        }px)`;
      });
    }
  }
  render() {
    return (
      <div className="relative flex flex-col">
        <IoIosArrowDropupCircle
          className={`absolute z-30 opacity-100 cursor-pointer   hover:bg-[#f0f]  left-[30px] top-0 ${
            this.state.current_card < (this.props.imagesList.length - 1) / 4
              ? ""
              : "opacity-0"
          }`}
          size={24}
          onClick={this.next}
        />
        <IoIosArrowDropdownCircle
          className={`absolute z-30 opacity-100 cursor-pointer  hover:bg-[#f0f]  bottom-0 left-[30px] ${
            this.state.current_card > 0 ? "" : "opacity-0"
          }`}
          size={24}
          onClick={this.prev}
        />

        <div className="h-[480px] " style={{ overflowY: "hidden" }}>
          <div
            ref={(ref_id) => (this.card_container = ref_id)}
            className="flex flex-col w-fit"
            style={{ height: "max-content" }}
          >
            {this.props.imagesList.map((thumb) => (
              <div
                className="cursor-pointer"
                onClick={() => this.onThumbClick(thumb)}
              >
                <img
                  className="w-[80px] h-[80px] object-cover mb-10 "
                  src={thumb}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
