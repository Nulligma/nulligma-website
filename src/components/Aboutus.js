import React from "react";
import ThemeImage from "./image/ThemeImage";

function Aboutus({ theme }) {
  return (
    <section className="content-inner" id="aboutus">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 m-b30 imgRotating">
            <ThemeImage theme={theme} imgName={"about"} />
          </div>
          <div className="col-lg-6 m-b30">
            <div className="section-head style-1 mb-4">
              <h6 className="sub-title bgl-primary m-b20 text-primary">
                About Us
              </h6>
              <h2 className="title">
                A Team of Experts with a Passion for Building an Impactful
                Digital World
              </h2>
            </div>
            <p>
              Our mission is to provide the highest quality services to our
              clients to the best of our abilities. We set the work priority as
              per the client's requirement, thus leading them in the digital
              world. We take you on an online journey with our imperative
              data-driven solution.
            </p>
            <p className="m-b30">
              Nulligma started with a belief that in the field of app/ web/ game
              development, logo, and brand building, innovative solutions can
              change the entire look of your business. We thus offer end-to-end
              solutions to our customers to go online in minutes. Our constant
              measurement and feedback from the client help us to do things the
              right way and at the right cost.
            </p>
            <h4 className="m-b30">Director</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
