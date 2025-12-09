import React from 'react'
import style from "../AllCss.module.css";
import { Link } from "react-router-dom";

const BuildBranmart = () => {
  return (
    <>
          <section class={`${style["hero-section"]} py-5`}>
        <div class="container text-center">
          <h1 class={`${style.buildToRun} mb-3`}>
         LEARN, BUILD AND<br />
          GROW WITH BRANMART
          </h1>

          <p class={`${style.buildToRunPara} mb-4`}>
       Explore more tools and resources to get the most out of <br /> your website.
          </p>

          <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">

            <Link
              className={`btn ${style["btn-primary-custom"]} px-4 py-2`}
              to={"/blog"}
            >
              Visit Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BuildBranmart