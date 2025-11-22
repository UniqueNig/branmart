import React from "react";
import style from "./AllCss.module.css";
import image21 from "../assets/image 21.png";
import image20 from "../assets/image 20.png";
import image23 from "../assets/image 23.png";

const BuildToRun = () => {
  return (
    <>
      <section class="py-5">
        <div class="container">
          {/* <!-- Heading --> */}
          <div class="text-center mb-5">
            <h2 class={`fw-bold ${style.buildToRun}`}>
              EVERYTHING YOU NEED TO BUILD AND RUN <br />
              YOUR ONLINE STORE
            </h2>
            <p class={`w-75 mx-auto ${style.buildToRunPara}`}>
              Branmarnt gives you powerful tools to design, sell, and manage
              your
              <br />
              business—all in one place.
            </p>
          </div>

          {/* <!-- Row 1 --> */}
          <div class={`row align-items-center ${style.needed} mb-5`}>
            <div class="col-md-6 text-center">
              <h4 class={`fw-bold mb-3 ${style.buildToRun}`}>
                WEBSITE BUILDER
              </h4>
              <p class={`text-muted ${style.buildToRunPara}`}>
                Create a professional website with <br />
                an easy drag-and-drop editor. No <br />
                coding required.
              </p>
            </div>

            <div class={"col-md-6 text-center"}>
              <img src={image21} class="img-fluid shadow rounded-4" alt="" />
            </div>
          </div>

          {/* <!-- Row 2 --> */}
          <div
            class={`row align-items-center ${style.needed} flex-md-row-reverse mb-5`}
          >
            <div class="col-md-6 text-center">
              <h4 class={`fw-bold mb-3 ${style.buildToRun}`}>
                STORE MANAGEMENT
              </h4>
              <p class={`${style.buildToRunPara}`}>
                Add products, track orders, and <br />
                manage inventory from one <br />
                simple dashboard.
              </p>
            </div>

            <div class="col-md-6 text-center">
              <img src={image20} class="img-fluid shadow rounded-4" alt="" />
            </div>
          </div>

          {/* <!-- Row 3 --> */}
          <div class={`row align-items-center ${style.needed} mb-5`}>
            <div class="col-md-6 text-center">
              <h4 class={`fw-bold mb-3 ${style.buildToRun}`}>PAYMENTS</h4>
              <p class={`${style.buildToRunPara}`}>
                Accept secure online payments <br />
                with trusted gateways like <br />
                Paystack, Stripe, and Flutterwave.
              </p>
            </div>

            <div class="col-md-6 text-center">
              <img src={image23} class="img-fluid shadow rounded-4" alt="" />
            </div>
          </div>

          {/* <!-- Row 4 --> */}
          <div
            class={`row align-items-center ${style.needed} flex-md-row-reverse`}
          >
            <div class="col-md-6 text-center">
              <h4 class={`fw-bold mb-3 ${style.buildToRun}`}>CUSTOM DOMAIN</h4>
              <p class={`${style.buildToRunPara}`}>
                Connect your own domain and <br />
                give your store a unique, <br />
                professional identity.
              </p>
            </div>

            <div class="col-md-6 text-center">
              <img src={image21} class="img-fluid shadow rounded-4" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildToRun;
