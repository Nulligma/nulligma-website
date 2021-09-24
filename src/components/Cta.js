import React from "react";
import Background from "./image/BackgroundImage";

function Cta() {
  return (
    <section className="bg-light text-primary">
      <Background imgName="bg12">
        <div className="container content-inner">
          <div className="row action-box style-1 align-items-center">
            <div className="col-xl-7 col-lg-8 col-md-8 ">
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  More With Us
                </h6>
                <h2 className="title">
                  You Want To Showcase Your Website In Top Join With Us
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 col-md-4 text-right">
              <i className="fa fa-angle-right m-r10"></i>Join Now
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
}

export default Cta;
