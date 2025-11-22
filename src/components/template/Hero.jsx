import React from "react";
import style from "../AllCss.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <>
        <section class={`py-5`}>
          <div class="container text-center">
            <h1 class={`${style.defaultHeading} mb-3`}>
              FIND THE PERFECT TEMPLATE FOR <br />
              YOUR BUSINESS
            </h1>

            <p class={`${style.buildToRunPara} mb-4`}>
              Explore professional designs for every industry. Customize them to
              fit your brand and launch <br /> faster.
            </p>

            <div class="d-flex justify-content-center flex-wrap">
                <Link to={'/templates'} className={` btn ${style["btn-primary-custom"]} px-4 py-2`}>Explore all templates</Link>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Hero;
