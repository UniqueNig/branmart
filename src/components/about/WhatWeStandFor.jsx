import React from "react";
import style from "../AllCss.module.css";
import standImg from "../../assets/standfor.png"; // update to your correct image

const WhatWeStandFor = () => {
  return (
    <section className={`py-5  ${style.standSection}`}>
      <div className="container">
        <div className="row d-flex g-5">
          {/* LEFT IMAGE */}
          <div className="col-lg-5">
            <img
              src={standImg}
              alt="Team celebrating"
              className="img-fluid rounded-4 w-100"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7">
            {/* Heading */}
            <h2 className={`fw-bold mb-2 ${style.standHeading}`}>
              WHAT WE STAND FOR
            </h2>
            <p className={`mb-5 ${style.standSubtext}`}>
              Our values shape how we build, support, and grow with <br /> every
              user.
            </p>

            <div className="container mt-5">
              {/* VALUE 1 */}
              <div className={`p-4 rounded-4 mb-3 ${style.standCard} w-100`}>
                <div className="d-flex">
                  <h5 className={style.standNumber}>01</h5>
                  <div className="ms-3">
                    <h6 className={`${style.standSub} fw-bold mb-2`}>Simplicity</h6>
                    <p className={style.standText}>
                      We believe building a website should be easy for everyone.{" "}
                      <br />
                      Branmarrt removes technical barriers with tools that help
                      you <br /> launch and manage your business website in
                      minutes. Every feature <br /> is designed to keep the
                      process simple.
                    </p>
                  </div>
                </div>
              </div>

              {/* VALUE 2 */}
              <div className={`p-4 rounded-4 mb-3 ${style.standCard} w-100`}>
                <div className="d-flex">
                  <h5 className={style.standNumber}>02</h5>
                  <div className="ms-3">
                    <h6 className={`${style.standSub} fw-bold mb-2`}>Innovation</h6>
                    <p className={style.standText}>
                      We constantly improve Branmart with new tools and ideas
                      that <br />
                      help businesses grow. From design flexibility to smart
                      integrations, <br /> we bring modern solutions that keep
                      you ahead in a fast-changing <br /> digital space.
                    </p>
                  </div>
                </div>
              </div>

              {/* VALUE 3 */}
              <div className={`p-4 rounded-4 mb-3 ${style.standCard} w-100`}>
                <div className="d-flex">
                  <h5 className={style.standNumber}>03</h5>
                  <div className="ms-3">
                    <h6 className={`${style.standSub} fw-bold mb-2`}>Customer Focus</h6>
                    <p className={style.standText}>
                      Your goals shape what we build. We listen to feedback,
                      refine <br /> our features, and deliver updates that make
                      your experience better. <br /> Every improvement supports
                      your success online.
                    </p>
                  </div>
                </div>
              </div>

              {/* VALUE 4 */}
              <div className={`p-4 rounded-4 ${style.standCard} w-100`}>
                <div className="d-flex">
                  <h5 className={style.standNumber}>04</h5>
                  <div className="ms-3">
                    <h6 className={`${style.standSub} fw-bold mb-2`}>Integrity</h6>
                    <p className={style.standText}>
                      We build with transparency and trust. Our platform keeps
                      your <br /> data secure and our policies clear. We value
                      honesty in our work <br /> and in our relationship with
                      every user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;
