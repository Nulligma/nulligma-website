import React from "react";
import Background from "./image/BackgroundImage";

function Footer() {
  return (
    <footer className="site-footer style-1 text-light bg-Banner" id="footer">
      <Background imgName="bg14">
        <div className="footer-top">
          <div className="container">
            <div className="footer-info">
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-4">
                  <div className="footer-logo">NULLIGMA</div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <div className="icon-cell">
                        <i className="flaticon-email"></i>
                      </div>
                    </div>
                    <div className="icon-content">
                      <p>
                        support email
                        <br />
                        shantanu@nulligma.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <div className="icon-cell">
                        <i className="flaticon-location"></i>
                      </div>
                    </div>
                    <div className="icon-content">
                      <p>6th block Koramangala , Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">About Us</h5>
                  <p>
                    We bring imagination to reality through our creative
                    solutions that are both smart and innovative – establishing
                    new visual, verbal, and experiential standards that shape
                    entire experiences.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <button>Home</button>
                    </li>
                    <li>
                      <button>About Us</button>
                    </li>
                    <li>
                      <button>Services</button>
                    </li>
                    <li>
                      <button>Team</button>
                    </li>
                    <li>
                      <button>Blog</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <button>SEO & ASO</button>
                    </li>
                    <li>
                      <button>Web Development</button>
                    </li>
                    <li>
                      <button>Game Development</button>
                    </li>
                    <li>
                      <button>Illustrations</button>
                    </li>
                    <li>
                      <button>App Design </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Other links</h5>
                  <ul>
                    <li>
                      <button>FAQ</button>
                    </li>
                    <li>
                      <button>Portfolio</button>
                    </li>
                    <li>
                      <button>Privacy Policy</button>
                    </li>
                    <li>
                      <button>Terms & Conditions</button>
                    </li>
                    <li>
                      <button>Support </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Background>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <span className="copyright-text">
                Copyright © 2024 Nulligma. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
