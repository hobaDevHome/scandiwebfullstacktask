import React, { Component } from "react";
import "./Carousel.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

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
    let page = Math.floor(this.state.slide / 5);
    if (prevState.thumbsPage !== page) {
      this.setState({ thumbsPage: page });
    }
  }

  onThumbClick(thumb) {
    let index = this.props.imagesList.findIndex((e) => e === thumb);

    this.setState({ slide: index });
  }
  render() {
    return (
      <div className="flex gap-2 mt-6 ">
        <div className="h-[480px] mr-6">
          <div className="flex flex-col w-fit">
            {this.props.imagesList
              .slice(this.state.thumbsPage * 5, this.state.thumbsPage * 5 + 5)
              .map((thumb) => (
                <div
                  className="cursor-pointer"
                  onClick={() => this.onThumbClick(thumb)}
                >
                  <img
                    className="w-[80px] h-[80px] object-cover mb-6 object-top"
                    src={thumb}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="carousel">
          <div className="arrow arrow-left">
            <IoIosArrowBack onClick={() => this.prevSlide()} size={30} />
          </div>
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
          <div className="arrow arrow-right">
            <IoIosArrowForward onClick={() => this.nextSlide()} size={30} />
          </div>
        </div>
      </div>
    );
  }
}
