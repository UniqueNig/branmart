import React from "react";
import style from "./completesub.module.css";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

const CompleteSubscription = () => {
  return (
    <div className="container py-5">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h3 className={style.title}>COMPLETE SUBSCRIPTION</h3>
        <p className={style.subtitle}>
          You are just a step away from completing your subscription
        </p>
      </div>

      {/* SELECTED PLAN */}
      <div className="d-flex justify-content-center mb-4">
        <div className={`p-4 rounded-3 ${style.planCard}`}>
          <small className={style.muted}>Selected Plan</small>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className={`${style.basicPlan} mb-0`}>Basic Plan</p>
              <small className={` ${style.muted}`}>Monthly Subscription</small>
            </div>
            <button className={`btn p-0  ${style.changeBtn}`}>Change</button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="row g-4">
        {/* LEFT FORM */}
        <div className="col-lg-8">
          <div className="card p-4 rounded-4">
            {/* BILLING TOGGLE */}
            <div
              className={`d-flex justify-content-center mb-4 ${style.toggleWrap}`}
            >
              <span className={`me-2`}>Monthly</span>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
              </div>
              <span className={`ms-2`}>
                Yearly <small className={style.save}>SAVE 20%</small>
              </span>
            </div>

            {/* PAYMENT DETAILS */}
            <h6 className={`${style.paymentDetail} mb-3`}>Payment Details</h6>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter first name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter last name"
                />
              </div>
              <div className="col-12">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter Value"
                />
              </div>
            </div>

            {/* CARD INFO */}
            <h6 className={`${style.paymentDetail} mb-3 mt-4`}>
              Card Information
            </h6>

            <div className="mb-3">
              <label htmlFor="cardNumber">Card Number</label>
              <div className="position-relative mt-2">
                <input
                  className="form-control pe-5"
                  placeholder="0000 0000 0000 0000"
                  type="number"
                  max={16}
                />

                <Lock
                  size={14}
                  className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted pe-none"
                />
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input className="form-control mt-2" placeholder="MM/YYYY" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cvv">CVV</label>
                <input className="form-control mt-2" placeholder="123" />
              </div>
            </div>

            {/* BILLING ADDRESS */}
            <h6 className={`${style.paymentDetail} mb-3 mt-4`}>
              Billing Address
            </h6>

            <div className="mb-3">
              <label htmlFor="address">Address Line</label>
              <input
                className="form-control mt-2"
                placeholder="Enter address line"
              />
            </div>

            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="country">Country/Region</label>
                <input
                  className="form-control mt-2"
                  placeholder="e.g, Nigeria"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="state">State/Province</label>
                <input className="form-control mt-2" placeholder="e.g, Lagos" />
              </div>
              <div className="col-md-4">
                <label htmlFor="postalCode">Postal Code</label>
                <input className="form-control mt-2" placeholder="10001" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="col-lg-4">
          <div className="card p-4 rounded-4">
            <h6 className="mb-3">Order summary</h6>

            <div className="d-flex justify-content-between mb-3">
              <span className={style.orderLight}>Basic Plan</span>
              <span className={style.orderBold}>$14.99/month</span>
            </div>

            <div className="d-flex justify-content-between">
              <span className={style.orderLight}>Tax</span>
              <span className={style.orderBold}>$1.20</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-3">
              <span className={style.orderBold}>Total</span>
              <span className={style.orderBold}>$16.19/month</span>
            </div>

            <Link
              to={"/store-setup/payment-success"}
              className={`btn w-100 rounded-pill ${style.subscribeBtn}`}
            >
              Subscribe
            </Link>

            <p className={`text-center mt-3 ${style.muted}`}>
              <Lock size={14} />
              Secure payment. You can cancel anytime.
            </p>

            <p className={`text-center ${style.muted}`}>
              You can cancel your subscription anytime from your account
              settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteSubscription;
