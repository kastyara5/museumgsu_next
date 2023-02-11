import React, { FC } from "react";

import SliderModel from "@/models/SliderModel";

const Slider: FC<SliderModel> = ({ id, images }) => (
  <div id={id} className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {images.map((_, index) => (
        <li
          data-target={`#${id}`}
          data-slide-to={index}
          className={`${index === 0 && "active"}`}
        />
      ))}
    </ol>
    <div className="carousel-inner">
      {images.map((image, index) => (
        <div className={`carousel-item ${index === 0 && "active"}`}>
          <img width="100%" height="auto" alt={image} src={image} />
        </div>
      ))}
    </div>

    <a
      className="carousel-control-prev"
      href={`#${id}`}
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href={`#${id}`}
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Slider;
