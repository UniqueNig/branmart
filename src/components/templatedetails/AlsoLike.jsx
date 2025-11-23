import React from "react";
import style from "../AllCss.module.css";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import image12 from "../../assets/image 12.png";
import { Link } from "react-router-dom";


const AlsoLike = () => {
  return (
    <>
      <section>
        <div className="container mb-5 mt-5">
          {/* <!-- Main Title --> */}
          <h2 className={` fw-bold mb-2 ${style.defaultHeading}`}>
            YOU MIGHT ALSO LIKE
          </h2>

          <div className="row mb-4">
            <p className={`col-md-9 text-muted ${style.defaultPara}`}>
              Explore other templates made for online businesses.
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
                  <Link
                    className={style["preview-link"]}
                    to={"/template-details"}
                  >
                    {" "}
                    Preview ↗
                  </Link>
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
                  <Link
                    className={style["preview-link"]}
                    to={"/template-details"}
                  >
                    {" "}
                    Preview ↗
                  </Link>
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
                  <Link
                    className={style["preview-link"]}
                    to={"/template-details"}
                  >
                    {" "}
                    Preview ↗
                  </Link>
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
                  <Link
                    className={style["preview-link"]}
                    to={"/template-details"}
                  >
                    {" "}
                    Preview ↗
                  </Link>
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

        </div>

      </section>
    </>
  );
};

export default AlsoLike;
