import React, { Component } from "react";
import "./Carousel.css";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);

    this.state = {
      slide: 0,
      thumbsPage: 0,
    };
    this.thumbsSlice = [];
  }

  nextSlide() {
    this.setState({
      slide:
        this.state.slide < this.props.imagesList.length - 1
          ? this.state.slide + 1
          : this.state.slide,
    });
  }
  prevSlide() {
    this.setState({
      slide: this.state.slide > 0 ? this.state.slide - 1 : this.state.slide,
    });
    let page = Math.floor(this.state.slide / 4);
    this.setState({ thumbsPage: page });
  }
  componentDidUpdate(prevProps, prevState) {
    let page = Math.floor(this.state.slide / 4);
    if (prevState.thumbsPage !== page) {
      this.setState({ thumbsPage: page });
    }

    console.log("page", this.state.thumbsPage);
  }

  onThumbClick(thumb) {
    // this.props.onClick(thumb);
  }
  render() {
    return (
      <div className="flex">
        <div>
          <div className="h-[480px] " style={{ overflowY: "hidden" }}>
            <div
              className="flex flex-col w-fit"
              style={{ height: "max-content" }}
            >
              {this.props.imagesList
                .slice(this.state.thumbsPage * 4, this.state.thumbsPage * 4 + 4)
                .map((thumb) => (
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
        <div className="carousel">
          <IoIosArrowDropupCircle
            onClick={() => this.prevSlide()}
            className="arrow arrow-left"
          />
          {this.props.imagesList.map((item, idx) => {
            return (
              <img
                src={item}
                alt={item}
                key={idx}
                className={
                  this.state.slide === idx ? "slide" : "slide slide-hidden"
                }
              />
            );
          })}
          <IoIosArrowDropdownCircle
            onClick={() => this.nextSlide()}
            className="arrow arrow-right"
          />
        </div>
      </div>
    );
  }
}
