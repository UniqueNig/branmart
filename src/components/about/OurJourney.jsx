import React from "react";
import style from "../AllCss.module.css";

const OurJourney = () => {
  return (
    <>
      <section class={` py-5`}>
        <div class="container text-center">
          <h1 class={`${style.journeyHeading} mb-3`}>OUR JOURNEY</h1>

          <p class={`${style.journeypara} mb-4 text-center`}>
            Branmart started with a goal to simplify how businesses go online. <br />
            Many small businesses struggle with complex tools and high <br />
            development costs. We built Branmart to change that—an all-in-one <br />
            platform for building websites, managing products, and accepting <br />
            payments with ease.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurJourney;
