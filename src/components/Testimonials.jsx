import React from "react";
import style from "./AllCss.module.css";
import ada from "../assets/ada.png";
import mic from "../assets/mic.png";
import fat from "../assets/fat.png";

const Testimonials = () => {
  return (
    <>
      <section className={`${style["testimonials-section"]} py-5`}>
        <div className="container">
          <div className="row align-items-start mb-5">
            {/* <!-- Left Text --> */}
            <div className="col-lg-6 fade animated-fade-up">
              <p className={`${style.howItWorkspara}`}>Testimonials</p>
              <h2 className={`${style.buildToRun}`}>
                TRUSTED BY 25,000+ HAPPY
                <br />
                CUSTOMERS
              </h2>
              <p className={`${style.buildToRunPara}`}>
                Real feedback from entrepreneurs who built and <br />
                launched their stores with Branmarrt.
              </p>
            </div>

            {/* <!-- Right Stats --> */}
            <div className="col-lg-6">
              <div className="row g-3 fade animated-fade-up">
                <div className="col-md-6">
                  <div className={style["stats-card"]}>
                    <h3 className={style.buildToRun}>12,000+</h3>
                    <p className={style.buildToRunPara}>
                      Active users visiting every <br /> month!
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={style["stats-card"]}>
                    <h3 className={style.buildToRun}>4.8 ⭐⭐⭐⭐⭐</h3>
                    <p className={style.buildToRunPara}>
                      Rated 4.9 by 2,423 happy customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Testimonials Cards --> */}
          <div className="row gy-4 fade animated-fade-up">
            {/* <!-- Card 1 --> */}
            <div className="col-lg-4">
              <div className={`${style["testimonial-card"]} h-100`}>
                <div className={`${style["quote-mark"]}`}>“</div>
                <div className={style.stars}>⭐⭐⭐⭐⭐</div>
                <p className={`${style.buildToRunPara}`}>
                  Branmarrt helped me launch my fashion store in one weekend. I
                  added my products, customized the theme, and started selling
                  immediately.
                </p>

                <div className={style.profile}>
                  <div>
                    <strong>Adaeze O.</strong>
                    <span>Fashion & Accessories</span>
                  </div>
                  <img src={ada} alt="user" />
                </div>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="col-lg-4">
              <div className={`${style["testimonial-card"]} h-100`}>
                <div className={`${style["quote-mark"]}`}>“</div>
                <div className={style.stars}>⭐⭐⭐⭐⭐</div>
                <p className={`${style.buildToRunPara}`}>
                  I manage products, payments, and orders from one dashboard.
                  Branmarrt saves me hours every week.
                </p>

                <div className={style.profile}>
                  <div>
                    <strong>Michael T.</strong>
                    <span>Tech Gadgets</span>
                  </div>
                  <img src={mic} alt="user" />
                </div>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="col-lg-4">
              <div className={`${style["testimonial-card"]} h-100`}>
                <div className={`${style["quote-mark"]}`}>“</div>
                <div className={style.stars}>⭐⭐⭐⭐⭐</div>
                <p className={`${style.buildToRunPara}`}>
                  The templates look modern and professional. My customers love
                  the shopping experience.
                </p>

                <div className={style.profile}>
                  <div>
                    <strong>Fatima A.</strong>
                    <span>Skincare Brand</span>
                  </div>
                  <img src={fat} alt="user" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Navigation Buttons --> */}
          <div className="d-flex justify-content-center mt-4 fade animated-fade-up">
            <button className={`${style["nav-btn"]}`}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className={`${style["nav-btn"]} ms-3`}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
