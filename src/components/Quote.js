import React, { useState } from "react";
import ThemeImage from "./image/ThemeImage";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";

function Quote({ theme }) {
  const [formOrMessage, setformOrMessage] = useState("form");

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "gmail",
        "template_xbxbbo8",
        e.target,
        "user_bAcdRuEqLhj61ihyYgV68"
      )
      .then(
        (result) => {
          setformOrMessage("success");
        },
        (error) => {
          setformOrMessage("error");
        }
      );
    setformOrMessage("loading");
    //e.target.reset();
  }

  function FormWithMessage() {
    if (formOrMessage === "form") {
      return (
        <>
          <div className="section-head style-1">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Contact Us
            </h6>
            <h2 className="title">Let’s Get Together & Work</h2>
          </div>
          <form className="dlab-form dzForm" method="POST" onSubmit={sendEmail}>
            <div className="dzFormMsg"></div>
            <input
              type="hidden"
              className="form-control"
              name="dzToDo"
              value="Contact"
            />
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-user"></i>
                    </span>
                  </div>
                  <input
                    name="first_name"
                    type="text"
                    required
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-user"></i>
                    </span>
                  </div>
                  <input
                    name="last_name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-envelope"></i>
                    </span>
                  </div>
                  <input
                    name="email"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-phone"></i>
                    </span>
                  </div>
                  <input
                    name="phone"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Phone No."
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-file-alt"></i>
                    </span>
                  </div>
                  <input
                    name="project_title"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Project Title"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-list"></i>
                    </span>
                  </div>
                  <select
                    name="service"
                    className="form-control"
                    defaultValue="0"
                    required
                  >
                    <option value="0">Choose Service</option>
                    <option value="1">Web Development</option>
                    <option value="2">Web Design</option>
                    <option value="3">Strategy & Research</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-sms"></i>
                    </span>
                  </div>
                  <textarea
                    name="message"
                    required
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-12 mt-2">
                <button
                  name="submit"
                  type="submit"
                  value="Submit"
                  className="submit-btn"
                >
                  <i className="fa fa-angle-right m-r10"></i>Submit Now
                </button>
              </div>
            </div>
          </form>
        </>
      );
    } else if (formOrMessage === "success") {
      return (
        <Alert variant="success" dismissible={false}>
          <Alert.Heading>We are very excited to work with you</Alert.Heading>
          <p>
            Thanks for sending your message.We will reply to you as soon as
            possible with a detailed solution.
            <hr />
            If you are looking for an urgent solution then
            <br />
            Please contact using one these:
            <br />
            Email: shantanu@nulligma.com
            <br />
            Phone: +91-934-0708-756
          </p>
        </Alert>
      );
    } else if (formOrMessage === "fail") {
      return (
        <Alert variant="danger" dismissible={false}>
          <Alert.Heading>Oh snap! Some services are down</Alert.Heading>
          <p>
            Looks like some of our services are down and we cannot deliver your
            message through here.
            <hr />
            Please contact using one these:
            <br />
            Email: shantanu@nulligma.com
            <br />
            Phone: +91-934-0708-756
          </p>
        </Alert>
      );
    } else if (formOrMessage === "loading") {
      return (
        <Alert variant="info" dismissible={false}>
          Sending email please wait.
        </Alert>
      );
    }
  }

  return (
    <section className="content-inner" id="quote">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7 m-b30">
            <FormWithMessage />
          </div>
          <div className="col-xl-6 col-lg-5 m-b30 imgRotating">
            <ThemeImage theme={theme} imgName={"contact"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
