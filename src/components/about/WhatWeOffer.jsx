import React from "react";
import style from "../AllCss.module.css";
import Trusted from "../Trusted";

const WhatWeOffer = () => {
  return (
    <section className={`py-5 ${style.offerSection}`}>
      <div className="container text-center">

        {/* Heading */}
        <h2 className={`fw-bold mb-3 ${style.offerHeading}`}>WHAT WE OFFER</h2>
        <p className={`mb-5 ${style.offerSubtext}`}>
          Everything you need to build, manage, and grow your online <br />
          business in one place.
        </p>

        {/* OFFER CARDS */}
        <div className="row justify-content-center g-4">

          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`p-4 rounded-4 h-100 ${style.offerCard}`}>
              <div className={`mb-2 ${style.icon1} text-start`}>
                <i className="bi bi-globe2"></i>
              </div>
              <h6 className={`${style.cardText11Heading} text-start`}>All-in-One Platform</h6>
              <p className={`text-start mt-4 ${style.cardText11}`}>
                Build, host, and manage your website from one dashboard.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`p-4 rounded-4 h-100 ${style.offerCard}`}>
              <div className={`mb-2 ${style.icon1} text-start`}>
                <i className="bi bi-ui-checks-grid"></i>
              </div>
              <h6 className={`${style.cardText11Heading} text-start`}>Flexible Design Tools</h6>
              <p className={`text-start mt-4 ${style.cardText11}`}>
                Choose a template, customize layouts, and make it your own.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`p-4 rounded-4 h-100 ${style.offerCard}`}>
              <div className={`mb-2 ${style.icon1} text-start`}>
                <i className="bi bi-credit-card"></i>
              </div>
              <h6 className={`${style.cardText11Heading} text-start`}>Secure Payments</h6>
              <p className={`text-start mt-4 ${style.cardText11}`}>
                Accept payments confidently with global gateways.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`p-4 rounded-4 h-100 ${style.offerCard}`}>
              <div className={`mb-2 ${style.icon1} text-start`}>
                <i className="bi bi-headset"></i>
              </div>
              <h6 className={`${style.cardText11Heading} text-start`}>Growth Support</h6>
              <p className={`text-start mt-4 ${style.cardText11}`}>
                Get insights, guides, and analytics to improve your business.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* TRUSTED COMPONENT */}
      <div className={`${style.trustedWhite} mt-5`}>
        <Trusted />
      </div>
    </section>
  );
};

export default WhatWeOffer;
