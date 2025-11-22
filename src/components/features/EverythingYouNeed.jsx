import React, { useEffect } from "react";
import style from "../AllCss.module.css";
import sales from '../../assets/sales.png'
// import { initScrollAnimations } from "../../utils/AllJS";

const EverythingYouNeed = () => {
//   useEffect(() => {
//     initScrollAnimations();
//   }, []);

  return (
    <>
      <section className="py-5">
        <div className="container text-center">
          <h2 className={`${style.sectionTitle} fade-up mb-2`}>
            EVERYTHING YOU NEED IN ONE PLACE
          </h2>
  
          <p className={`${style.buildToRunPara} text-muted fade-up mb-5`}>
            Powerful tools built for individuals and businesses across
            industries.
          </p>

          <div className="d-flex justify-content-center fade-up mb-5">
            <img
              src={sales}
              alt="Sales Analytics"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "900px" }}
            />
          </div>

          {/* FEATURES GRID */}
          <div className="container row gy-5 text-start mt-3">
            <div className="col-md-4 fade-up">
              <h5 className={style.orangeTitle}>WEBSITE BUILDER</h5>
              <p className={style.buildToRunPara}>
                Drag-and-drop tools and templates for <br /> easy design. No coding
                required.
              </p>
            </div>

            <div className="col-md-4 fade-up">
              <h5 className={style.orangeTitle}>E-COMMERCE TOOLS</h5>
              <p className={style.buildToRunPara}>
                Manage products, inventory, and sales <br /> from one dashboard.
              </p>
            </div>

            <div className="col-md-4 fade-up">
              <h5 className={style.orangeTitle}>CUSTOM DOMAINS</h5>
              <p className={style.buildToRunPara}>
                Connect your existing domain or buy one <br /> directly on Branmarrt.
              </p>
            </div>

            <div className="col-md-4 fade-up">
              <h5 className={style.orangeTitle}>PAYMENTS & CHECKOUT</h5>
              <p className={style.buildToRunPara}>
                Accept secure online payments with <br /> trusted gateways like Paystack, Stripe, and
                Flutterwave.
              </p>
            </div>

            <div className="col-md-4 fade-up">
              <h5 className={style.orangeTitle}>SEO TOOLS</h5>
              <p className={style.buildToRunPara}>
                Improve visibility with built-in search <br /> optimization settings.
              </p>
            </div>

            <div className="col-md-4 fade-up">
              <h5 className={style.orangeTitle}>ANALYTICS</h5>
              <p className={style.buildToRunPara}>
                Track your performance and make <br /> informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EverythingYouNeed;
