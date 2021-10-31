import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block img-fluid carousel-img w-100"
            src="https://images.unsplash.com/photo-1573269354259-8c108692afa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="w-75 d-flex flex-column justify-content-center align-content-center caption">
            <h5 className="text-white pb-1 text-uppercase">
              The river that flows over the falls, the Zambezi, provides the
              perfect backdrop
            </h5>
            <p>prehistoric caves that surround</p>
            <div className="btn">
              <button className="carousel-btn">See Details</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="carousel-img">
            <img
              className="d-block img-fluid  w-100"
              src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className="w-75 d-flex flex-column justify-content-center align-content-center caption">
            <h5 className="text-white pb-1 text-uppercase">
              he small town of Livingstone is a great place to visit after or
              just before your waterfall.
            </h5>
            <p>winding paths by bike</p>
            <div className="btn">
              <button className="carousel-btn">See Details</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid carousel-img w-100"
            src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption className="w-75 d-flex flex-column justify-content-center align-content-center caption">
            <h5 className="text-white pb-1 text-uppercase">
              you’re taking a trip to the “stone forest” of Meteora, look out
              for the Greek orthodox
            </h5>
            <p>expert explorers in the Greek woodland.</p>
            <div className="btn">
              <button className="carousel-btn">See Details</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
