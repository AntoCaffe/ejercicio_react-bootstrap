import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function Carousel() {
    return (
        <div className="container mt-5">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="components/Image/th.jpeg" className="im1" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="components/Images/62df1b5e5e0bf.web" className="im2" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="components/Images/LG-ThinQ_Products1-1024x658-1.webp" className="im3" alt="Slide 3" />
                    </div>
                    <div className="carousel-item">
                        <img src="components/Images/Los-mejores-7-regalos-del-Dia-de-las-Madres-para-las-mamas-modernas.jpg" className="im4" alt="Slide 4" />
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
