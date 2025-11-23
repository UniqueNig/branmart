import React from 'react'
import style from "../AllCss.module.css";
import { Link } from "react-router-dom";

const StartBuilding = () => {
  return (
    <>
          <section class={`${style["hero-section"]} py-5`}>
        <div class="container text-center">
          <h1 class={`${style.buildToRun} mb-3`}>
            START BUILDING WITH <br />
            MIXTAS
          </h1>

          <p class={`${style.buildToRunPara} mb-4`}>
          Choose this template, customize it, and go live in <br/> minutes.
          </p>

          <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <Link
              to={"/templates"}
              className={` btn ${style["btn-outline-custom"]} px-4 py-2`}
            >
              {" "}
              Explore More Templates
            </Link>

            <a
              href="#"
              className={`btn ${style["btn-primary-custom"]} px-4 py-2`}
            >
              Use This Template
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartBuilding