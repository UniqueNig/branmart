import React from "react";
import style from "../AllCss.module.css";
import { Link } from "react-router-dom";
const ReadyToStart = () => {
  return (
    <>
      <section class={`${style["hero-section"]} py-5`}>
        <div class="container text-center">
          <h1 class={`${style.buildToRun} mb-3`}>
            READY TO START YOUR <br />
            WEBSITE?
          </h1>

          <p class={`${style.buildToRunPara} mb-4`}>
            Build and launch your online business today with <br />
            Branmart.
          </p>

          <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <Link
              to={"/templates"}
              className={` btn ${style["btn-outline-custom"]} px-4 py-2`}
            >
              {" "}
              Explore Templates
            </Link>

            <Link
              className={`btn ${style["btn-primary-custom"]} px-4 py-2`}
              to={"/sign-up"}
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadyToStart;
