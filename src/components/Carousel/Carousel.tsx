import React from "react";

interface CarouselProps {
  imageUrls: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ imageUrls }) => {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === 0 ? "true" : undefined}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={url}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
