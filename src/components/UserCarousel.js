import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function UserCarousel({ theme }) {
  const [asd, setAsd] = useState();
  const settings = {
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };
  const renderArrows = () => {
    return (
      <div className="owl-nav ">
        <div className={`owl-prev ${theme}`} onClick={() => asd.slickPrev()}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className={`owl-next ${theme}`} onClick={() => asd.slickNext()}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        <Slider ref={(c) => setAsd(c)} {...settings}>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  “Their convenience, price, and game development experience
                  help them stand out. I would prefer them on everybody else.”
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  “Game development is effortless with Nulligma. I've tried all
                  the services and this is the most effective & high quality
                  work I ever get.”
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  "I wanted the game to have a heart and a soul. We hit it off
                  well with their development services."
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  “Every now & then we resistant change & then you give it a try
                  and get a new game design. I loved it. Thank you, Nulligma”
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  "They specialize in user experience, creating an
                  easy-to-navigate game interface."
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  "The team is very easy to communicate with, and they can
                  overcome any challenge. Would recommend anytime."
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  “I love Nulligma - fantastic design, and that too with such a
                  friendly cost. Thanks for making my project look exceptional!”
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  “Thanks for the great designs. You are really the best. It’s
                  my 3rd time with you already. Nobody compares. Don't stop!”
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  "They have the amazing ability to make app development feel
                  like a fun experience."
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-1 bg-Card">
              <div className="testimonial-text">
                <p>
                  “They’re more thoughtful than any other development team I’ve
                  worked with.”-
                </p>
              </div>
            </div>
          </div>
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default UserCarousel;
