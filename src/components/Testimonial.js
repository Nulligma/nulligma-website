import React from "react";
import Background from "./image/BackgroundImage";
import UserCarousel from "./UserCarousel";

function Testimonial({ theme }) {
  return (
    <>
      <section className="bg-Banner" id="testimonial">
        <Background imgName="bg3">
          <div className="content-inner ">
            <div className="px-xl-5 px-md-4 px-3">
              <div className="row testimonials-wraper-1">
                <div className="col-lg-9">
                  <UserCarousel theme={theme} />
                </div>
                <div
                  className="col-lg-3 wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.8s"
                >
                  <div
                    className={`section-head style-1 p-t15 ${
                      theme === "dark" ? "text-secondary" : "text-white"
                    }`}
                  >
                    <h6 className="sub-title bgl-light m-b20">Testmonial</h6>
                    <h2 className="title m-b10">
                      See What They Say About Us!{" "}
                    </h2>
                    <p>
                      We believe in honest & transparent customer services.
                      Here’s what our valuable clients have to say about us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Background>
      </section>
    </>
  );
}

export default Testimonial;
