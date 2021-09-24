import React from "react";
import ThemeImage from "./image/ThemeImage";

function Showcase({ theme }) {
  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <div className="banner-inner">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner-content">
                <h6 className=" sub-title text-primary">
                  WE BRING IDEAS TO LIFE
                </h6>
                <h1>
                  Build a Strong <span className="text-primary">Product </span>{" "}
                  with a Unique{" "}
                  <span className="text-primary">Personality</span>
                </h1>
                <p className="m-b30">
                  We bring imagination to reality through our creative solutions
                  that are both smart and innovative – establishing new visual,
                  verbal, and experiential standards that shape entire
                  experiences.
                </p>
                <button className="phone cta">Contact us</button>
                <div className="phone number ps-4">934-0708-756</div>
              </div>
            </div>
            <div className="col-md-6 imgRotating pt-3">
              <ThemeImage theme={theme} imgName={"showcase"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
