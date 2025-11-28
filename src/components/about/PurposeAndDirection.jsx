import React from "react";
import style from "../AllCss.module.css";
import purposeImg from "../../assets/purpose-img.png"; // replace with real image

const PurposeAndDirection = () => {
  return (
    <section className="py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT SIDE – TEXT & CARDS */}
          <div className="col-lg-6 mb-4">

            {/* Section Title */}
            <h2 className={`${style.purposeHeading} mb-3`}>
              OUR PURPOSE AND DIRECTION
            </h2>

            {/* Subtitle */}
            <p className={`${style.purposeSubtext} mb-5`}>
              We exist to make website creation simple, accessible, <br />
              and built for growth.
            </p>

            {/* Mission Card */}
            <div className={`${style.infoCard} p-4 w-75 mb-4 rounded-4 shadow`}>
              <h6 className={`${style.cardHeading} fw-bold mb-2`}>Our Mission</h6>
              <p className={`${style.cardText}`}>
                To empower individuals and businesses to create, <br /> manage, and
                scale their online presence without <br /> barriers.
              </p>
            </div>

            {/* Vision Card */}
            <div className={`${style.infoCard} p-4 w-75 rounded-4 shadow`}>
              <h6 className={`${style.cardHeading} fw-bold mb-2`}>Our Vision</h6>
              <p className={`${style.cardText}`}>
                To become the most trusted platform for building <br /> and growing
                digital businesses across every <br /> industry.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="col-lg-6">
            <div className={`${style.imageWrapper} rounded-4 overflow-hidden`}>
              <img
                src={purposeImg}
                alt="People working"
                className="img-fluid w-100 d-block"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PurposeAndDirection;
