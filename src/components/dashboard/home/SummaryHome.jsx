import React, { useState, useEffect } from "react";
import style from "./summary.module.css";
import tshirt from "../../../assets/t-shirtmockup.png";
import happywoman from "../../../assets/Happywomanclapping.png";
import smartdevice from "../../../assets/Smartdeviceessentials.png";
import storehouse from "../../../assets/store.png";
import mastercard from "../../../assets/mastercard.png";
import visa from "../../../assets/visa.png";
import gpay from "../../../assets/gpay.png";
import { Link } from "react-router-dom";

const SummaryHome = () => {
  // -----------------------------------
  // Example dashboard stats (replace with API later)
  // -----------------------------------
  const [totalSales, setTotalSales] = useState(2420);
  const [totalOrders, setTotalOrders] = useState(500);
  const [activeProducts, setActiveProducts] = useState(0);
  const [visitorsToday, setVisitorsToday] = useState(0);

  // Percentage changes (mocked)
  const [salesChange, setSalesChange] = useState(40);
  const [ordersChange, setOrdersChange] = useState(-10);
  const [productsChange, setProductsChange] = useState(-10);
  const [visitorsChange, setVisitorsChange] = useState(20);

  // -----------------------------------
  // Store setup logic
  // -----------------------------------
  const [storeSetupComplete, setStoreSetupComplete] = useState(false);
  const [businessProfileComplete, setBusinessProfileComplete] = useState(false);

  useEffect(() => {
    const storeSetup = localStorage.getItem("storeSetupComplete") === "true";
    const businessProfile =
      localStorage.getItem("businessProfileComplete") === "true";

    setStoreSetupComplete(storeSetup);
    setBusinessProfileComplete(businessProfile);
  }, []);

  // When both are done, both cards should disappear.
  const showSetupSection = !storeSetupComplete || !businessProfileComplete;

  // -----------------------------------
  // Additional onboarding cards
  // -----------------------------------
  const [productAdded, setProductAdded] = useState(false);
  const [paymentsSetup, setPaymentsSetup] = useState(false);
  const [domainAdded, setDomainAdded] = useState(false);

  return (
    <section className={`container ${style.summaryWrapper}`}>
      {/* =======================
          TOP STAT CARDS
      ======================== */}
      <div className="row g-4 mb-4">
        {/* Total Sales */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className={style.statCard}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-cash-stack"></i>
              <span className={style.statLabel}>Total Sales</span>
            </div>
            <h3 className={style.statNumber}>{totalSales}</h3>
            <p className={style.statChange}>
              <span
                className={salesChange >= 0 ? style.positive : style.negative}
              >
                {salesChange >= 0
                  ? `↑ ${salesChange}%`
                  : `↓ ${Math.abs(salesChange)}%`}
              </span>{" "}
              vs last month
            </p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className={style.statCard}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-bag"></i>
              <span className={style.statLabel}>Total Orders</span>
            </div>
            <h3 className={style.statNumber}>{totalOrders}</h3>
            <p className={style.statChange}>
              <span
                className={ordersChange >= 0 ? style.positive : style.negative}
              >
                {ordersChange >= 0
                  ? `↑ ${ordersChange}%`
                  : `↓ ${Math.abs(ordersChange)}%`}
              </span>{" "}
              vs last month
            </p>
          </div>
        </div>

        {/* Active Products */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className={style.statCard}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-box"></i>
              <span className={style.statLabel}>Active Products</span>
            </div>
            <h3 className={style.statNumber}>{activeProducts}</h3>
            <p className={style.statChange}>
              <span
                className={
                  productsChange >= 0 ? style.positive : style.negative
                }
              >
                {productsChange >= 0
                  ? `↑ ${productsChange}%`
                  : `↓ ${Math.abs(productsChange)}%`}
              </span>{" "}
              vs last month
            </p>
          </div>
        </div>

        {/* Visitors Today */}
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className={style.statCard}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-people"></i>
              <span className={style.statLabel}>Visitors Today</span>
            </div>
            <h3 className={style.statNumber}>{visitorsToday}</h3>
            <p className={style.statChange}>
              <span
                className={
                  visitorsChange >= 0 ? style.positive : style.negative
                }
              >
                {visitorsChange >= 0
                  ? `↑ ${visitorsChange}%`
                  : `↓ ${Math.abs(visitorsChange)}%`}
              </span>{" "}
              vs last month
            </p>
          </div>
        </div>
      </div>

      {/* =======================
          SETUP CARDS SECTION
      ======================== */}
      {showSetupSection && (
        <div className="row g-4 mb-4">
          {/* Store Setup */}
          {!storeSetupComplete && (
            <div className="col-xl-6 col-lg-6">
              <div
                className={`${style.setupCard} d-flex justify-content-between`}
              >
                <div>
                  <h4 className={style.cardTitle}>Complete Store Setup</h4>
                  <p className={style.cardText}>
                    Complete your store setup by selecting a plan and choosing a
                    theme.
                  </p>

                  <Link
                    to="/store-setup/plan"
                    className={`btn ${style.actionBtn}`}
                  >
                    Complete Setup
                  </Link>
                </div>

                <img
                  src={storehouse}
                  alt="store setup"
                  className={style.cardImage}
                />
              </div>
            </div>
          )}

          {/* Business Profile */}
          {!businessProfileComplete && (
            <div className="col-xl-6 col-lg-6">
              <div
                className={`${style.setupCard} d-flex justify-content-between`}
              >
                <div>
                  <h4 className={style.cardTitle}>Complete Business Profile</h4>
                  <p className={style.cardText}>
                    Add your company information and documents to verify your
                    business.
                  </p>

                  <Link
                    to="/dashboard/business-profile"
                    className={`btn ${style.actionBtn}`}
                  >
                    Complete Business Profile
                  </Link>
                </div>

                <img
                  src={happywoman}
                  alt="business profile"
                  className={style.cardImage}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* =======================
          ONBOARDING STEPS
      ======================== */}
      <div className="row g-4 mb-5">
        {/* Add Product */}
        {!productAdded && (
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={style.smallCard}>
              <h5 className={style.smallTitle}>Add your first product</h5>
              <div className="row gap-2 mt-2 mb-2">
                <div className="col-md-2 my-2 col-sm-6">
                  <img src={tshirt} className="img-fluid" alt="" />
                </div>
                <div className="col-md-2 my-2  col-sm-6">
                  <img src={smartdevice} className="img-fluid" alt="" />
                </div>
              </div>
              <button
                className={`btn ${style.smallBtn}`}
                onClick={() => setProductAdded(true)}
              >
                Add Product
              </button>
            </div>
          </div>
        )}

        {/* Setup Payments */}
        {!paymentsSetup && (
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={style.smallCard}>
              <h5 className={style.smallTitle}>Set up payments</h5>
              <div className="row gap-2 mt-2 mb-3">
                <div className="col-md-2 my-2 col-sm-4">
                  <img src={mastercard} className="img-fluid" alt="" />
                </div>
                <div className="col-md-2 my-2 col-sm-4">
                  <img src={visa} className="img-fluid" alt="" />
                </div>
                <div className="col-md-2 my-2 col-sm-4">
                  <img src={gpay} className="img-fluid" alt="" />
                </div>
              </div>
              <button
                className={`btn ${style.smallBtn}`}
                onClick={() => setPaymentsSetup(true)}
              >
                Set Up
              </button>
            </div>
          </div>
        )}

        {/* Add Domain */}
        {!domainAdded && (
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={style.smallCard}>
              <h5 className={style.smallTitle}>Add your domain</h5>

              <div className="d-flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="yourstore.com"
                  className={`form-control ${style.domainInput}`}
                  onChange={(e) => {}}
                />
              </div>

              <button
                className={`btn ${style.smallBtn} mt-3`}
                onClick={() => setDomainAdded(true)}
              >
                Customize
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SummaryHome;
