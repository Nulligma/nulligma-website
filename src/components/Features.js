import ThemeImage from "./image/ThemeImage";
import React from "react";

function Features({ theme }) {
  return (
    <section className="content-inner-2" id="process">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-head style-1">
              <h6 className="sub-title bgl-primary m-b20 text-primary">
                How We Work
              </h6>
              <h2 className="title">
                Our Work Process to Help Create Your Unique Brand
              </h2>
            </div>
            <div className="section-wraper-one">
              <div className="icon-bx-wraper style-2 left m-b30">
                <div className="icon-bx-md radius bg-white text-red">
                  <div className="icon-cell">
                    <i className="flaticon-idea"></i>
                  </div>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Idea & Brainstorming</h4>
                  <p>
                    We help you brainstorm the idea that best fits your business
                    to be more innovative & effective.
                  </p>
                </div>
              </div>
              <div className="icon-bx-wraper style-2 left m-b30">
                <div className="icon-bx-md radius bg-white text-yellow">
                  <div className="icon-cell">
                    <i className="flaticon-line-graph"></i>
                  </div>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Designing & Developing</h4>
                  <p>
                    We develop highest standard products to handle huge data
                    concerning security & performance.
                  </p>
                </div>
              </div>
              <div className="icon-bx-wraper style-2 left m-b30">
                <div className="icon-bx-md radius bg-white text-green">
                  <div className="icon-cell">
                    <i className="flaticon-rocket"></i>
                  </div>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Testing & Launching</h4>
                  <p>
                    End product that ensures full satisfaction with impeccable
                    performance, zero bugs & smart features.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 imgRotating ">
            <ThemeImage theme={theme} imgName={"process"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
