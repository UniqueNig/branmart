import React from "react";
import style from "../AllCss.module.css";

const ComparePlans = () => {
  return (
    <section className="py-5 mb-4">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className={`${style.defaultHeading} fw-bold`}>
            COMPARE OUR PLANS
          </h2>
          <p className={`text-muted ${style.defaultPara}`}>
            Compare what's included in each plan
          </p>
        </div>

        {/* GRID */}
        <div className="row g-4 justify-content-center">

          {/* LEFT COLUMN — FEATURES */}
          <div className="col-lg-3">
            <div className="d-flex flex-column p-4 gap-4">

              <h6 className={style.featureTitle}>Features Overview</h6>

              <p className={style.featureItem}>Monthly Price</p>
              <p className={style.featureItem}>Website Builder Access</p>
              <p className={style.featureItem}>Products Limit</p>
              <p className={style.featureItem}>Custom Domain Connection</p>
              <p className={style.featureItem}>Branmart Subdomain</p>
              <p className={style.featureItem}>Storage Space</p>
              <p className={style.featureItem}>Discount Codes</p>
              <p className={style.featureItem}>Analytics & Reports</p>
              <p className={style.featureItem}>Customer Accounts</p>
              <p className={style.featureItem}>Email Notifications</p>
              <p className={style.featureItem}>Team Members / Staff Accounts</p>
              <p className={style.featureItem}>Inventory Management</p>
              <p className={style.featureItem}>Support Access</p>
              <p className={style.featureItem}>Transaction Fees (Branmart)</p>
              <p className={style.featureItem}>Support Response Time</p>

            </div>
          </div>

          {/* BASIC PLAN */}
          <div className="col-lg-3">
            <div className="d-flex flex-column text-center p-4 gap-4">

              <h6 className={style.planTitle}>Basic Plan</h6>

              <p className={style.planValue}>$0</p>
              <p className={style.planValue}>Basic Editor</p>
              <p className={style.planValue}>Up to 5</p>
              <p className={style.planValue}>—</p>
              <p className={style.planValue}><i className="bi bi-check-circle"  style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}>5GB</p>
              <p className={style.planValue}>—</p>
              <p className={style.planValue}>Basic Insights</p>
              <p className={style.planValue}>—</p>
              <p className={style.planValue}>Order alerts only</p>
              <p className={style.planValue}>1</p>
              <p className={style.planValue}>Basic</p>
              <p className={style.planValue}>Email only</p>
              <p className={style.planValue}>2% per sale</p>
              <p className={style.planValue}>24 hours</p>

              <button className={`btn ${style.compareBtn} mt-2`}>
                Start for free
              </button>
            </div>
          </div>

          {/* PRO PLAN — HIGHLIGHTED */}
          <div className="col-lg-3">
            <div className={`${style.highlightCol} rounded-4 text-center p-4 d-flex flex-column gap-4`}>

              <h6 className={style.planTitle}>Pro Plan</h6>

              <p className={style.planValue}>$15</p>
              <p className={style.planValue}>Full Editor</p>
              <p className={style.planValue}>Unlimited</p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}>20GB</p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}>Standard Analytics</p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}>Customizable templates</p>
              <p className={style.planValue}>5</p>
              <p className={style.planValue}>Full</p>
              <p className={style.planValue}>Priority chat support</p>
              <p className={style.planValue}>1%</p>
              <p className={style.planValue}>6 hours</p>

              <button className={`btn ${style.compareBtn} mt-2`}>
                Start for free
              </button>
            </div>
          </div>

          {/* BUSINESS PLAN */}
          <div className="col-lg-3">
            <div className="d-flex flex-column text-center p-4 gap-4">

              <h6 className={style.planTitle}>Business Plan</h6>

              <p className={style.planValue}>$29</p>
              <p className={style.planValue}>Full Editor</p>
              <p className={style.planValue}>Unlimited</p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}>50GB</p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}>Advanced Analytics</p>
              <p className={style.planValue}><i className="bi bi-check-circle" style={{ color: '#FF4F00' }}></i></p>
              <p className={style.planValue}>Automated workflows</p>
              <p className={style.planValue}>10</p>
              <p className={style.planValue}>Full</p>
              <p className={style.planValue}>Dedicated account manager</p>
              <p className={style.planValue}>0%</p>
              <p className={style.planValue}>2 hours</p>

              <button className={`btn ${style.compareBtn} mt-2`}>
                Start for free
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
