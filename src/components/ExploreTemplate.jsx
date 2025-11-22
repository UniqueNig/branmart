import React from "react";
import style from "./AllCss.module.css";
import { Link } from "react-router-dom";

const ExploreTemplate = () => {
  return (
    <>
      <section class={`${style["hero-section"]} py-5`}>
        <div class="container text-center">
          <h1 class={`${style.buildToRun} mb-3`}>
            START BUILDING YOUR <br />
            WEBSITE TODAY
          </h1>

          <p class={`${style.buildToRunPara} mb-4`}>
            Create your store, customize your design, and start <br />
            selling—all in one platform.
          </p>

          <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <Link
              to={"/templates"}
              className={` btn ${style["btn-outline-custom"]} px-4 py-2`}
            >
              {" "}
              Explore Templates
            </Link>

            <a
              href="#"
              className={`btn ${style["btn-primary-custom"]} px-4 py-2`}
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreTemplate;
