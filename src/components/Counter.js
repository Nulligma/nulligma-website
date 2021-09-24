import React from "react";
import CounterUp from "./CounterUp";
import Background from "./image/BackgroundImage";

function Counter() {
  return (
    <div>
      <section className="bg-Banner" id="counter">
        <Background imgName="bg3">
          <div className="container content-inner">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="icon-bx-wraper style-4 text-center bg-Card">
                  <div className="icon-bx-sm radius bg-green shadow-green m-b20">
                    <div className="icon-cell">
                      <i className="flaticon-confetti"></i>
                    </div>
                  </div>
                  <div className="icon-content">
                    <span className="title text-secondary">
                      Years of Experience
                    </span>
                    <h2 className="counter m-b0 text-primary">
                      <CounterUp count={10} />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="icon-bx-wraper style-4 text-center m-tb30 bg-Card">
                  <div className="icon-bx-sm radius bg-yellow shadow-yellow m-b20">
                    <div className="icon-cell">
                      <i className="flaticon-website"></i>
                    </div>
                  </div>
                  <div className="icon-content">
                    <span className="title text-secondary">
                      Software expertise
                    </span>
                    <h2 className="counter m-b0 text-primary">
                      <CounterUp count={25} />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="icon-bx-wraper style-4 text-center bg-Card">
                  <div className="icon-bx-sm radius bg-blue shadow-blue m-b20">
                    <div className="icon-cell">
                      <i className="flaticon-smile"></i>
                    </div>
                  </div>
                  <div className="icon-content">
                    <span className="title text-secondary">
                      Satisfied Clients
                    </span>
                    <h2 className="counter m-b0 text-primary">
                      <CounterUp count={60} />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="icon-bx-wraper style-4 text-center m-tb30 bg-Card">
                  <div className="icon-bx-sm radius bg-red shadow-red m-b20">
                    <div className="icon-cell">
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                  <div className="icon-content">
                    <span className="title text-secondary">
                      Games Developed
                    </span>
                    <h2 className="counter m-b0 text-primary">
                      <CounterUp count={100} />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Background>
      </section>
    </div>
  );
}

export default Counter;
