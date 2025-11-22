import React from "react";
import style from "../AllCss.module.css";
import image12 from "../../assets/image 12.png";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import { Link } from "react-router-dom";

const HundredTemplate = () => {
  return (
    <>
      <section className="py-5 mt-5">
        <div className="container">
          {/* <!-- Main Title --> */}
          <h2 className={` fw-bold mb-2 ${style.defaultHeading}`}>
            HUNDRED OF TEMPLATES FOR EVERY <br /> BUSINESSES
          </h2>

          <div className="row mb-4">
            <p className={`col-md-9 text-muted ${style.defaultPara}`}>
              Choose from designs built for your business type.
            </p>

            {/* <!-- View All Button --> */}
            <div className="col-md-3 text-center">
              <Link to={"/templates"}>
                {" "}
                <button className={` btn ${style["btn-orange"]}  rounded-pill`}>
                  View all templates →
                </button>
              </Link>
            </div>
          </div>

          {/* <!-- Filter Buttons --> */}
          <div className="d-flex justify-content-center flex-wrap mb-4 gap-2">
            <button className={`btn ${style["filter-btn"]} ${style.active}`}>
              All
            </button>
            <button className={`btn ${style["filter-btn"]} `}>
              Online Stores
            </button>
            <button className={`btn ${style["filter-btn"]} `}>
              Restaurants
            </button>
            <button className={`btn ${style["filter-btn"]} `}>
              Real Estate
            </button>
            <button className={`btn ${style["filter-btn"]} `}>
              Consulting & Agencies
            </button>
            <button className={`btn ${style["filter-btn"]} `}>Education</button>
            <button className={`btn ${style["filter-btn"]} `}>
              Health & Fitness
            </button>
            <button className={`btn ${style["filter-btn"]} `}>Events</button>
          </div>

          {/* <!-- Templates Grid --> */}
          <div className="row g-4">
            {/* <!-- Template Card --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image12} className="img-fluid rounded w-100" alt="" />

                {/* <!-- Hover Overlay --> */}
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Flone</span>
                  <span className="badge bg-light text-dark border">Free</span>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate Cards Example --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image9} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Phlox</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image10} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Mixtas</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate Cards Example --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image9} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Phlox</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Templates Grid --> */}
          <div className="row g-4 mt-3">
            {/* <!-- Template Card --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image10} className="img-fluid rounded w-100" alt="" />

                {/* <!-- Hover Overlay --> */}
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Flone</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate Cards Example --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image9} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Phlox</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image12} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Mixtas</span>
                  <span className="badge bg-light text-dark border">Free</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image12} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Mixtas</span>
                  <span className="badge bg-light text-dark border">Free</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* <!-- Template Card --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image12} className="img-fluid rounded w-100" alt="" />

                {/* <!-- Hover Overlay --> */}
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Flone</span>
                  <span className="badge bg-light text-dark border">Free</span>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate Cards Example --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image9} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Phlox</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image10} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Mixtas</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate Cards Example --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image9} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Phlox</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Templates Grid --> */}
          <div className="row g-4 mt-3">
            {/* <!-- Template Card --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image10} className="img-fluid rounded w-100" alt="" />

                {/* <!-- Hover Overlay --> */}
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Flone</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Duplicate Cards Example --> */}
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image9} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Phlox</span>
                  <span className="badge bg-light text-dark border">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image12} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Mixtas</span>
                  <span className="badge bg-light text-dark border">Free</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className={`${style["template-card"]} fadeInUp position-relative`}
              >
                <img src={image12} className="img-fluid rounded w-100" alt="" />
                <div
                  className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                >
                  <button className={`btn ${style["btn-orange"]} mb-2`}>
                    Use template
                  </button>
                  <a href="#" className={`${style["preview-link"]}`}>
                    Preview ↗
                  </a>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                  <span className="fw-semibold">Mixtas</span>
                  <span className="badge bg-light text-dark border">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HundredTemplate;
