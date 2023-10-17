import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel() {
  return (
    <div className="container mt-5">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Imagenes/0.webp" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="Imagenes/1.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="Imagenes/2.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="Imagenes/3.webp" className="d-block w-100" alt="Slide 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;


