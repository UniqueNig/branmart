import React, { useEffect } from "react";
import style from "./AllCss.module.css";
import { initScrollAnimations } from "../utils/AllJS";

const StoreOnline = () => {
  useEffect(() => {
    initScrollAnimations()
  }, []);

  return (
    <>
      <section className={`py-5 ${style.storeOnline} mb-5`}>
        <div className={`container text-center ${style.howItWorks}`}>
          <p className={`w-75 mx-auto text-center ${style.howItWorkspara}`}>
            How It Works
          </p>
          <h2 className={`fw-bold text-center ${style.buildToRun}`}>
            GET YOUR STORE ONLINE IN <br />
            THREE SIMPLE STEPS
          </h2>

          <div className="row justify-content-center g-4 mt-5">
            {/* <!-- Step 1 --> */}
            <div className="col-md-4">
              <div
                className={`${style["step-card"]} ${style.fadeInUp} fadeInUp p-4 rounded-4 h-100`}
                style={{ background: "#fff0e6", border: "1px solid #f7dfd1" }}
              >
                <div className={`${style["step-badge"]} bounce ${style.bounce} mb-4`}>
                  1
                </div>
                <h5 className={`fw-bold ${style.stepheading}`}>
                  Create your account
                </h5>
                <p
                  className={`text-muted small ${style.steppara}`}
                  style={{ color: "#535862" }}
                >
                  Sign up in seconds and get started for free.
                </p>
              </div>
            </div>

            {/* <!-- Step 2 --> */}
            <div className="col-md-4">
              <div
                className={`${style["step-card"]} fadeInUp p-4 rounded-4 h-100`}
                style={{ background: "#fff0e6", border: "1px solid #f7dfd1" }}
              >
                <div className={`${style["step-badge"]} ${style.bounce} mb-4`}>
                  2
                </div>
                <h5 className={`fw-bold ${style.stepheading}`}>
                  Choose a template
                </h5>
                <p
                  className={`text-muted small ${style.steppara}`}
                  style={{ color: "#535862" }}
                >
                  Customize your website using the drag-and-drop editor.
                </p>
              </div>
            </div>

            {/* <!-- Step 3 --> */}
            <div className="col-md-4">
              <div
                className={`${style["step-card"]} fadeInUp p-4 rounded-4 h-100`}
                style={{ background: "#fff0e6", border: "1px solid #f7dfd1" }}
              >
                <div className={`${style["step-badge"]} ${style.bounce} mb-4`}>
                  3
                </div>
                <h5 className={`fw-bold ${style.stepheading}`}>
                  Launch your store
                </h5>
                <p
                  className={`text-muted small ${style.steppara}`}
                  style={{ color: "#535862" }}
                >
                  Customize and launch your store in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreOnline;
