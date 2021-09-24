import React, { useEffect, useState } from "react";
// import { Link } from "gatsby";
import DayToggler from "./DayToggler";
import { Container, Nav, Navbar } from "react-bootstrap";
import { animateScroll } from "react-scroll";
import Navitem from "./Navitem";
import ThemeImage from "./image/ThemeImage";

function Navigation({ siteTheme, toggleTheme }) {
  const [navbarClass, setNavbarClass] = useState("navbar");

  function logit() {
    if (window.pageYOffset === 0 && navbarClass === "navbar-fixed")
      setNavbarClass("navbar");
    else if (window.pageYOffset >= 150 && navbarClass === "navbar")
      setNavbarClass("navbar-fixed");
    //console.log(new Date().getTime());
  }

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  var handleBrandClick = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <Navbar expand="lg" expanded={expanded} className={navbarClass}>
        <Container>
          <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
            <ThemeImage theme={siteTheme} imgName={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleMenu}>Menu</Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="text-uppercase">
              <Navitem to="service">Services</Navitem>
              <Navitem to="projects">Projects</Navitem>
              <Navitem to="aboutus">About Us</Navitem>
              <Navitem to="process">How we work</Navitem>
              <Navitem to="testimonial">Testimonials</Navitem>
              <Navitem to="quote">Contact</Navitem>
            </Nav>
            <DayToggler intialTheme={siteTheme} changeTheme={toggleTheme} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    /*<nav className={navbarClass}>
      <Container className="d-md-none d-flex justify-content-between align-items-center">
        <DayToggler intialTheme={siteTheme} changeTheme={toggleTheme} />

        <div className="navbar-brand">NULLIGMA</div>

        <DayToggler intialTheme={siteTheme} changeTheme={toggleTheme} />
      </Container>
      <Container className="d-none d-md-flex justify-content-between align-items-center">
        <div className="logo">NULLIGMA</div>
        <div>
          <ToggleButtonGroup
            name="theme"
            type="radio"
            value={theme.number}
            onChange={handleThemeChange}
            className="me-3"
          >
            <ToggleButton id="theme1Btn" class="submitBtn" value={1}>
              Section 1
            </ToggleButton>
            <ToggleButton id="theme2Btn" class="submitBtn" value={2}>
              Section 2
            </ToggleButton>
            <ToggleButton id="theme3Btn" class="submitBtn" value={3}>
              Section 3
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            name="day"
            type="radio"
            value={theme.day}
            onChange={handleDayChange}
          >
            <ToggleButton id="lightBtn" value="light">
              Section 4
            </ToggleButton>
            <ToggleButton id="darkBtn" value="dark">
              Section 5
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Container>
    </nav>
    <div className="navigation py-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <h1 className="logo">SASS</h1>
        <div className="menu d-md-none">
          <button type="button" className="btn btn-primary">
            Menu
          </button>
        </div>
        <ul className="d-none d-md-flex justify-content-between align-items-center">
          <li>
            <ToggleButtonGroup
              name="value"
              type="radio"
              value={value}
              onChange={handleChange}
            >
              <ToggleButton id="theme-1" value={1}>Theme 1</ToggleButton>
              <ToggleButton id="theme-2" value={2}>Theme 2</ToggleButton>
              <ToggleButton id="theme-3" value={3}>Theme 3</ToggleButton>
            </ToggleButtonGroup>
          </li>
          <li>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <DayToggler intialTheme={theme} changeTheme={toggleTheme} />
              )}
            </ThemeToggler>
          </li>
        </ul>
      </nav>
    </div>*/
  );
}

export default Navigation;
