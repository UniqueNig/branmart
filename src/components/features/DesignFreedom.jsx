import React from "react";
import style from "../AllCss.module.css";

const DesignFreedom = () => {
  return (
    <section className={`container text-center ${style.sectionWrapper}`}>
      <h2 className={style.title}>DESIGN FREEDOM WITHOUT THE <br /> COMPLEXITY</h2>
      <p className={style.subtitle}>
        Customize your website with flexible tools that adapt to your brand.
      </p>

      <div className="row g-4 mt-4">
        <div className="col-md-6">
          <div className={`${style.box} d-flex align-items-center`}>
            <span className={`bi bi-check-circle ${style.icon}`}></span>
            <p className={`${style.para} m-0`}>Drag-and-drop editor for real-time editing.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className={`${style.box} d-flex align-items-center`}>
            <span className={`bi bi-check-circle ${style.icon}`}></span>
            <p className={`${style.para} m-0`}>Pre-built templates tailored for industries.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className={`${style.box} d-flex align-items-center`}>
            <span className={`bi bi-check-circle ${style.icon}`}></span>
            <p className={`${style.para} m-0`}>Font, color, and layout controls.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className={`${style.box} d-flex align-items-center`}>
            <span className={`bi bi-check-circle ${style.icon}`}></span>
            <p className={`${style.para} m-0`}>Reusable content blocks for banners and testimonials.</p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className={`${style.box} d-flex align-items-center`}>
            <span className={`bi bi-check-circle ${style.icon}`}></span>
            <p className={`${style.para} m-0`}>Mobile-responsive designs that look great everywhere.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignFreedom;
