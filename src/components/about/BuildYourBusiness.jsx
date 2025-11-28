import React from 'react'
import style from "../AllCss.module.css";

const BuildYourBusiness = () => {
  return (
      <>
        <section class={`${style["hero-section"]} py-5`}>
          <div class="container text-center">
            <h1 class={`${style.buildToRun} mb-3`}>
              BUILD YOUR BUSINESS <br />
              WITH BRANMART
            </h1>
  
            <p class={`${style.buildToRunPara} mb-4`}>
             Join thousands of entrepreneurs who are taking their <br />business online.
            </p>
  
            <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">
              <a
                href="#"
                className={`btn ${style["btn-primary-custom"]} px-4 py-2`}
              >
                Start free
              </a>
            </div>
          </div>
        </section>
      </>
  )
}

export default BuildYourBusiness