import React from "react";
import style from "../blog/blog.module.css";

const HelpHero = () => {
  return (
    <>
      <div className="container text-center py-5">
        {/* Top Label */}
        <p className={`${style.topLabel} mb-2`}>Help Centre</p>

        {/* Main Heading */}
        <h1 className={`${style.mainHeading} fw-bold mb-3`}>
          CAN WE HELP YOU?
        </h1>

        {/* Subtitle */}
        <p className={`${style.subText} mx-auto`} style={{ maxWidth: "650px" }}>
          Find step-by-step guides, common solutions, and answers to your
          <br /> questions about using Branmart.
        </p>

        <div className="d-flex justify-content-center mb-4">
          <div className="input-group w-50">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              className="form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpHero;
