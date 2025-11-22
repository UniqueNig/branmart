import React from "react";
import style from "../AllCss.module.css";

const Hero = () => {
  return (
    <>
      <section class={`py-5`}>
        <div class="container text-center">
          <h1 class={`${style.defaultHeading} mb-3`}>BROWSE TEMPLATES</h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
