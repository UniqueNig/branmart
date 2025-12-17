import React from "react";
import style from "./paymentsucces.module.css";
import { Check, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccesfull = () => {
  return (
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content p-4 shadow rounded-4 ${style.card}`}>
          {/* ICON */}
          <div className="text-center mb-3">
            <div className={style.successIcon}>
              {/* <Check size={28} /> */}
              <CheckCircle size={28} />
            </div>
          </div>

          {/* TITLE */}
          <div className="text-center mb-3">
            <h5 className={style.title}>PAYMENT SUCCESSFUL</h5>
            <p className={style.subtitle}>
              Your subscription is active and you can now access all premium
              features.
              <br />
              We’ve sent a receipt to your email.
            </p>
          </div>

          {/* DETAILS */}
          <div className={`rounded-3 p-3 mb-5 ${style.summaryBox}`}>
            <div className="d-flex justify-content-between mb-2">
              <span className={style.label}>Plan</span>
              <span className={style.value}>Pro Plan</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className={style.label}>Billing Cycle</span>
              <span className={style.value}>Monthly</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className={style.label}>Amount Paid</span>
              <span className={style.value}>$9.99</span>
            </div>

            <div className="d-flex justify-content-between">
              <span className={style.label}>Payment Method</span>
              <span className={style.value}>Visa ending in 1234</span>
            </div>
          </div>

          {/* ACTIONS */}
          <Link to={'/store-setup/theme'} className={`btn w-100 mb-2 ${style.primaryBtn}`}>
            Continue
          </Link>

          <button className={`btn w-100 ${style.secondaryBtn}`}>
            Download receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccesfull;
