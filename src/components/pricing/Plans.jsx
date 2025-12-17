import React from "react";
import style from "../AllCss.module.css";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <section className="py-5" style={{ background: "#FFECD3" }}>
      <div className="container text-center">
        {/* TITLE */}
        <h2 className={`${style.defaultHeading} mb-3`}>
          SIMPLE PRICING FOR <br /> EVERY BUSINESS
        </h2>
        <p className={`text-muted mb-4 ${style.defaultPara}`}>
          Choose a plan that fits your business and scale with ease
        </p>

        {/* TOGGLE */}
        <div
          className="d-inline-flex align-items-center p-3 rounded-5 gap-3 mb-5"
          style={{ background: "#ffff" }}
        >
          <span className={style.toggleLabel}>Monthly</span>

          <label className={`form-switch ${style.toggleWrapper}`}>
            <input type="checkbox" className="form-check-input" />
          </label>

          <span className={style.toggleLabel}>Yearly</span>
          <span className={style.saveTag}>SAVE 20%</span>
        </div>

        {/* PRICING CARDS */}
        <div className="row justify-content-center gy-4">
          {/* BASIC PLAN */}
          <div className="col-md-4">
            <div className={`${style.cardBox} p-4 rounded-4 h-80`}>
              <h5 className="fw-bold">Basic Plan</h5>
              <p className="text-muted mb-4">
                Get started and explore the basics at <br /> no cost.
              </p>

              <div className="d-flex">
                <h1 className={`${style.price} fw-bold`}>$0</h1>
                <span className={`text-muted ${style.plans}`}>/monthly</span>
              </div>

              <Link
                to={"/choose-gateway"}
                className={`btn w-100 mt-4 py-2 ${style.outlineBtn}`}
              >
                Get Started Now
              </Link>

              <ul
                className={`list-unstyled mt-4 text-start ${style.featurePlan}`}
              >
                <li className="mb-3 bi bi-check-circle">
                  {" "}
                  Basic website builder
                </li>
                <li className="mb-3 bi bi-check-circle"> 5 Products</li>
                <li className="mb-3 bi bi-check-circle"> BranmarT subdomain</li>
                <li className="mb-3 bi bi-check-circle"> Basic analytics</li>
              </ul>
            </div>
          </div>

          {/* PRO PLAN (MIDDLE CARD – Highlighted) */}
          <div className="col-md-4">
            <div className={`${style.cardBoxActive} p-4 rounded-4 h-100`}>
              <h5 className="fw-bold">Pro Plan</h5>
              <p className="text-light mb-4">
                Launch your store with essential tools <br /> for growth.
              </p>

              <div className="d-flex">
                <h1 className={`${style.priceLight} fw-bold`}>$15</h1>
                <span className={`text-light ${style.plans}`}>/monthly</span>
              </div>

              <Link
                to={"/choose-gateway"}
                className={`btn w-100 mt-4 py-2 ${style.filledBtn}`}
              >
                Get Started Now
              </Link>

              <ul
                className={`list-unstyled mt-4 text-start text-light ${style.featurePlan}`}
              >
                <li className="mb-3 bi bi-check-circle"> Custom domain</li>
                <li className="mb-3 bi bi-check-circle"> Unlimited products</li>
                <li className="mb-3 bi bi-check-circle">
                  {" "}
                  Payment gateway integration
                </li>
                <li className="mb-3 bi bi-check-circle"> Advanced analytics</li>
                <li className="mb-3 bi bi-check-circle">
                  {" "}
                  Email notifications
                </li>
                <li className="mb-3 bi bi-check-circle"> Discount codes</li>
                <li className="mb-3 bi bi-check-circle"> Priority support</li>
                <li className="mb-3 bi bi-check-circle">
                  {" "}
                  Multiple staff accounts
                </li>
              </ul>
            </div>
          </div>

          {/* BUSINESS PLAN */}
          <div className="col-md-4">
            <div className={`${style.cardBox} p-4 rounded-4 h-80`}>
              <h5 className="fw-bold">Business Plan</h5>
              <p className="text-muted mb-4">
                Scale your business with advanced <br /> features and insights.
              </p>
              <div className="d-flex">
                <h1 className={`${style.price} fw-bold`}>$29</h1>
                <span className={`text-muted ${style.plans}`}>/monthly</span>
              </div>

              <Link
                to={"/choose-gateway"}
                className={`btn w-100 mt-4 py-2 ${style.outlineBtn}`}
              >
                Get Started Now
              </Link>

              <ul
                className={`list-unstyled mt-4 text-start ${style.featurePlan}`}
              >
                <li className="mb-3 bi bi-check-circle"> All Pro Features</li>
                <li className="mb-3 bi bi-check-circle"> API access</li>
                <li className="mb-3 bi bi-check-circle"> Advanced reporting</li>
                <li className="mb-3 bi bi-check-circle">
                  {" "}
                  Dedicated support manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
