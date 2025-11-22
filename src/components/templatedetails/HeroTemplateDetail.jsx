import React from "react";
import style from "../AllCss.module.css";
import { Link } from "react-router-dom";
import bran from "../../assets/bran.png";

const HeroTemplateDetail = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          {/* BREADCRUMBS */}
          <nav className="mb-3">
            <ol className={`${style.breadcrumb} breadcrumb`}>
              <li className={`${style["breadcrumb-item"]} breadcrumb-item`}>
                <Link className={style["breadcrumb-item"]} to={"/templates"}>
                  Templates
                </Link>{" "}
              </li>
              <li className={`${style["breadcrumb-item"]} breadcrumb-item`}>
                <Link className={style["breadcrumb-item"]} to={"/templates"}>
                  Online Stores
                </Link>{" "}
              </li>
              <li
                className={`${style["breadcrumb-item-active"]} breadcrumb-item active`}
              >
                Mixtas
              </li>
            </ol>
          </nav>

          {/* TITLE */}
          <h1 className={`fw-bold mb-3 ${style.titleTextDet}`}>
            MIXTAS - MODERN FASHION STORE
          </h1>

          {/* DESCRIPTION */}
          <p className={`mb-4 ${style.descTextDet}`}>
            Mixtas is perfect for fashion, gadgets, and lifestyle brands that
            want a modern, high-converting website. With clean typography, ample
            white space, and a sleek layout, it creates a seamless experience
            that drives signups and sales.
          </p>

          {/* BUTTONS */}
          <div className="d-flex gap-3 mb-4">
            <button className={`btn ${style.btnOrangeDet}`}>
              Use Template
            </button>
            <button className={`btn ${style.btnPreviewDet}`}>Preview</button>
          </div>

          <hr />

          {/* STATS ROW */}
          <div className="row text-center pt-3">
            {/* CREATOR */}
            <div className="col-6 col-md mb-4">
              <img src={bran} height="32" alt="" className="mb-2" />
              <div className={style.statName}>Branmart Themes</div>
              <div className={style.statPara}>Creator</div>
            </div>

            {/* PUBLISHED */}
            <div className="col-6 col-md mb-4">
              <i className="bi bi-clock fs-3 mb-2"></i>
              <div className={style.statName}>1 week ago</div>
              <div className={style.statPara}>Published</div>
            </div>

            {/* PAGES */}
            <div className="col-6 col-md mb-4">
              <i className="bi bi-book fs-3 mb-2"></i>
              <div className={style.statName}>5</div>
              <div className={style.statPara}>Pages</div>
            </div>

            {/* USERS */}
            <div className="col-6 col-md mb-4">
              <i className="bi bi-eye fs-3 mb-2"></i>
              <div className={style.statName}>12.1k</div>
              <div className={style.statPara}>Users</div>
            </div>

            {/* RATING */}
            <div className="col-6 col-md mb-4">
              <i className="bi bi-star fs-3 mb-2"></i>
              <div className={style.statName}>
                4.7 <small className="text-muted">(9.7k Reviews)</small>
              </div>
              <div className={style.statPara}>Ratings</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTemplateDetail;
