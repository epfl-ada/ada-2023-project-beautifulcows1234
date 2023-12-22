import React from "react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div className="bg-div" id="home">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
          <Fade top cascade>
            <section className="div-1">
              <h1 className="head-div-first-text">Michael Jackson: The King of Pop at the Service of Wikispeedia ?</h1>
              <h1 className="head-div-fourth-text">
              ADA 2023
              </h1>
              <p className="head-div-fourth-text">
                 Wikispeedia Dataset
              </p>
            </section>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <span className="scroll-btn">
          <a href="#home">
            <span className="mouse">
              <span></span>
            </span>
          </a>
        </span>
      </Fade>
    </div>
  );
};

export default Header;