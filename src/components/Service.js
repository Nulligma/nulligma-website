import React, { useState } from "react";

function Service() {
  const [open, setOpen] = useState(2);

  const categories = [
    {
      column: "col-lg-4 col-md-6",
      icon: "flaticon-help  text-white",
      title: "Technical Consultant",
      description:
        "We help you pick the best approach for your products to be more profitable and cost-effective. Our web solutions would allow you to resolve any business concerns and optimize them to engage users in the best way possible. Chose us now!",
      color: "icon-bx-md radius bg-yellow shadow-yellow",
    },
    {
      column: "col-lg-4 col-md-6",
      icon: "flaticon-boost  text-white",
      title: "SEO & ASO",
      description:
        "We pull the organic traffic volume to your doorstep with the power of SEO & ASO by completely transforming the way you conduct your marketing strategy with us. We create high buzz and boost up the reach of your online business.",
      color: "icon-bx-md radius bg-red shadow-red",
    },

    {
      column: "col-lg-4 col-md-6",
      icon: "flaticon-sketch text-white",
      title: "Art & Illustration",
      description:
        "Our expertise in art & illustration can help you stand out from the crowd by garnering maximum user attention. We design stunning and unique pixel-perfect game art & logos that enhance brand reputations and improve product engagement.",
      color: "icon-bx-md radius bg-skyblue shadow-skyblue",
    },

    {
      column: "col-lg-6 col-md-6",
      icon: "flaticon-paper-plane  text-white",
      title: "Brand Building",
      description:
        "To increase business value in the marketplace, your brand needs a story and positioning strategy. We are experts at creating an over-the-top brand identity to get ahead of your competitors. Get ready to make your name with us!",
      color: "icon-bx-md radius bg-green shadow-green",
    },

    {
      column: "col-lg-6 col-md-12",
      icon: "flaticon-coding  text-white",
      title: "App/Web/Game Development",
      description:
        "Nulligma offers secure, reliable, and easy-to-maintain App/Web/Game development services at an affordable price. Our skillful developers can easily handle huge data and complex transactions concerning security and performance.",
      color: "icon-bx-md radius bg-maroon shadow-maroon",
    },
  ];

  return (
    <>
      <section className="content-inner-2" id="service">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Services
            </h6>
            <h2 className="title">
              An All-In-One Platform for Everything Digital Services
            </h2>
          </div>
          <div className="row">
            {categories.map((cat, index) => (
              <div key={index} className={cat.column}>
                <div
                  role="button"
                  tabIndex={-4}
                  className={`bg-transparent ${
                    open === index
                      ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                      : "icon-bx-wraper style-1 box-hover text-center m-b30"
                  }`}
                  onMouseOver={() => setOpen(index)}
                  onFocus={() => setOpen(index)}
                >
                  <div className={cat.color}>
                    <div className="icon-cell">
                      <i className={cat.icon}></i>
                    </div>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title">{cat.title}</h4>
                    <p>{cat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
