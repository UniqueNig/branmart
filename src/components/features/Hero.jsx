import React from "react";
import style from "../AllCss.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section class={`${style["hero-section"]} py-5`}>
        <div class="container text-center">
          <h1 class={`${style.defaultHeading} mb-3`}>
            BUILD. MANAGE. GROW <br />
            ALL IN ONE PLATFORM
          </h1>

          <p class={`${style.buildToRunPara} mb-4`}>
            Branmart gives you every tool you need to create a professional
            website, <br /> sell online, and scale your business.
          </p>

          <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <a href="#" class={` btn ${style["btn-primary-custom"]} px-4 py-2`}>
              Start Free
            </a>
            <Link
              to={"/templates"}
              className={`btn ${style["btn-outline-custom"]} px-4 py-2`}
            >
              Explore Templates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
