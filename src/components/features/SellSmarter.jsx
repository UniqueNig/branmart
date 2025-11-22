import React from "react";
import style from "../AllCss.module.css";
import hero from '../../assets/sellsmartHero.png'

const SellSmarter = () => {
  return (
    <>
      {/* Section Wrapper */}
      <section
        className="container-fluid my-5 py-5"
        style={{ background: "#241717" }}
      >
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className={style.sellTitle}>SELL SMARTER WITH BRANMART</h2>
          <p className={style.sellSubtitle}>
            Powerful e-commerce tools built to simplify selling and boost <br />
            conversions.
          </p>
        </div>

        {/* Content Row */}
        <div className="container">
          <div className="row g-4 align-items-start mt-5">
            {/* Left Image */}
            <div className="col-lg-6">
              <img
                src={hero}
                alt="Sell Smarter"
                className={`img-fluid w-75  ${style.sellImage}`}
              />
            </div>

            {/* Right Feature List */}
            <div className="col-lg-6">
              <div className={`p-3 mb-3  ${style.featureCard}`}>
                <div className="row">
                  <div className="col-md-1">
                    <span className={style.featureNumber}>01</span>
                  </div>
                  <div className="col-md-11">
                    <h5 className={style.featureTitle}>Product Catalog</h5>
                    <p className={style.featureText}>
                      Organize and showcase unlimited products.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-3 mb-3  ${style.featureCard}`}>
                <div className="row">
                  <div className="col-md-1">
                    <span className={style.featureNumber}>02</span>
                  </div>
                  <div className="col-md-11">
                    <h5 className={style.featureTitle}>Order Management</h5>
                    <p className={style.featureText}>
                      Process, track, and fulfill orders easily.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-3 mb-3  ${style.featureCard}`}>
                <div className="row">
                  <div className="col-md-1">
                    <span className={style.featureNumber}>03</span>
                  </div>
                  <div className="col-md-11">
                    <h5 className={style.featureTitle}>
                      Multiple Payment Options
                    </h5>
                    <p className={style.featureText}>
                      Accept cards, wallets, and bank transfers.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-3 mb-3  ${style.featureCard}`}>
                <div className="row">
                  <div className="col-md-1">
                    <span className={style.featureNumber}>04</span>
                  </div>
                  <div className="col-md-11">
                    <h5 className={style.featureTitle}>
                      Discount & Coupon Tools
                    </h5>
                    <p className={style.featureText}>
                      Run promotions to attract more buyers.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-3 mb-3  ${style.featureCard}`}>
                <div className="row">
                  <div className="col-md-1">
                    <span className={style.featureNumber}>05</span>
                  </div>
                  <div className="col-md-11">
                    <h5 className={style.featureTitle}>Shipping Integration</h5>
                    <p className={style.featureText}>
                      Automate deliveries and manage logistics.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-3 mb-3  ${style.featureCard}`}>
                <div className="row">
                  <div className="col-md-1">
                    <span className={style.featureNumber}>06</span>
                  </div>
                  <div className="col-md-11">
                    <h5 className={style.featureTitle}>Customer Accounts</h5>
                    <p className={style.featureText}>
                      Let customers track orders and manage their details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellSmarter;
