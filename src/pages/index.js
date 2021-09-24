import * as React from "react";
import Aboutus from "../components/Aboutus";
import Counter from "../components/Counter";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Quote from "../components/Quote";
import Service from "../components/Service";
import Showcase from "../components/Showcase";
import Testimonial from "../components/Testimonial";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Nulligma | Creative Services</title>
        <div>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <>
                <Navigation siteTheme={theme} toggleTheme={toggleTheme} />
                <Showcase theme={theme} />
                <Service />
                <Projects />
                <Counter />
                <Aboutus theme={theme} />
                <Features theme={theme} />
                <Testimonial theme={theme} />
                <Quote theme={theme} />
                <Footer />
              </>
            )}
          </ThemeToggler>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
