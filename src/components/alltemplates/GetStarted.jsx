import React from 'react'
import style from "../AllCss.module.css";

const GetStarted = () => {
  return (
      <>
      <section class={`${style["hero-section"]} py-5`}>
        <div class="container text-center">
          <h1 class={`${style.buildToRun} mb-3`}>
            START WITH A TEMPLATE <br />
            AND GO LIVE TODAY
          </h1>

          <p class={`${style.buildToRunPara} mb-4`}>
Pick a design, make it yours, and launch your business <br /> website in minutes.
          </p>

          <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">

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
  )
}

export default GetStarted