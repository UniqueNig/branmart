import React from "react";
import style from "../AllCss.module.css";
import aboutImg from "../../assets/image 10.png";
import aboutImg1 from "../../assets/image 9.png";
import aboutImg2 from "../../assets/image 12.png";

import { Link } from "react-router-dom";

const AboutTemplate = () => {
  return (
    <section className="py-4">
      <div className="container">
        {/* TEMPLATE IMAGE (CENTERED) */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className={`${style.templateFrame} rounded-4`}>
              <div
                id="templateCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                {/* SLIDES */}
                <div className="carousel-inner rounded">
                  {[aboutImg, aboutImg1, aboutImg2].map((img, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className={style.cropBox}>
                        <img
                          src={img}
                          alt={`Slider Image ${index + 1}`}
                          className="img-fluid w-100 d-block rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CONTROLS */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#templateCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#templateCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT + SIDEBAR SECTION */}
        <div className="row g-4">
          <div className="col-lg-1"></div>

          {/* LEFT COLUMN */}
          <div className="col-lg-7">
            {/* ABOUT THIS TEMPLATE */}
            <h4 className={`${style.aboutSubhead} mb-3`}>
              About This Template
            </h4>
            <p className={style.statPara}>
              Simple, clean, and designed to convert. Mixtas is a premium
              e-commerce template for Fashion businesses that need a
              high-performing landing page. It features a sleek, modern layout
              with white space and bold typography to make content stand out.
            </p>
            <p className={style.statPara}>
              Ideal for fashion, gadgets, and lifestyle brands. Mixtas provides
              the perfect foundation for a professional and engaging web
              presence that turns visitors into customers.
            </p>

            {/* FEATURES */}
            <h5 className={`${style.aboutSubhead} mt-4 mb-3`}>Features</h5>
            <div className={`${style.statPara} d-flex flex-column gap-3`}>
              {[
                "Fully Responsive Design",
                "Customizable Sections",
                "Clean and Modern Layout",
                "SEO Optimized",
                "Fast Loading Times",
                "Advanced Animations",
                "Built-in Analytics",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded p-3 bg-white shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-3 ">
            {/* TAGS */}
            <h5 className={`${style.aboutSubhead} mb-3`}>Tags</h5>
            <div className={`${style.statPara} d-flex flex-wrap gap-2 mb-4`}>
              {[
                "E-Commerce",
                "Fashion Store",
                "Clean",
                "Minimal",
                "Modern",
                "Lifestyle",
              ].map((tag, i) => (
                <span key={i} className="badge bg-light text-dark border">
                  {tag}
                </span>
              ))}
            </div>

            {/* PAGES */}
            <h5 className={`${style.aboutSubhead} mb-3`}>Pages</h5>
            <ul className="ps-3 mb-4">
              <li className={style.statPara}>Homepage</li>
              <li className={style.statPara}>Product Listing</li>
              <li className={style.statPara}>Product Details</li>
              <li className={style.statPara}>About Us</li>
              <li className={style.statPara}>Contact / Support</li>
              <li className={style.statPara}>Blog</li>
            </ul>

            {/* SUPPORT */}
            <h5 className={`${style.aboutSubhead} mb-3`}>Support</h5>
            <p className={`${style.statPara} mb-1`}>
              Mixtas Website Template is made to be simple to edit and
              customize. If you run into any issues, notice a bug, or just want
              to say hello, email us at{" "}
              <Link
                className={`${style.paraLink} me-1`}
                to={"mailto:help@branmart.com"}
              >
                {" "}
                help@branmart.com.
              </Link>
              We’re happy to help!
            </p>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutTemplate;
