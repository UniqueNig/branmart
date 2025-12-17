import React, { useState } from "react";
import style from "./choosegateway.module.css";
import visa from '../../../../assets/visa.png'
import mastercard from '../../../../assets/mastercard.png'
import paypal from '../../../../assets/paypal.png'
import stripe from '../../../../assets/stripe.png'
import { Link } from "react-router-dom";



const gateways = [
  {
    id: "card",
    title: "Debit or Credit Card",
    logos: ["visa", "mastercard"],
  },
  {
    id: "paypal",
    title: "PayPal",
    logos: ["paypal"],
  },
  {
    id: "stripe",
    title: "Stripe",
    logos: ["stripe"],
  },
];

const ChooseGateway = () => {
  const [selected, setSelected] = useState("card");

  return (
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered  modal-lg">
        <div className="modal-content p-5 rounded-4">

          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className={`${style.gatewayheading} mb-1`}>Choose how to pay</h5>
              <p className={`${style.gatewaypara} mb-0`}>
                Your payment is safe and you can change your payment method anytime you want.
              </p>
            </div>

            <button className="btn-close" />
          </div>

          {/* PAYMENT OPTIONS */}
          <div className="row g-3 my-3">
            {gateways.map((gateway) => (
              <div className="col-md-4" key={gateway.id}>
                <div
                  className={`${style.gatewayCard} ${
                    selected === gateway.id ? style.active : ""
                  }`}
                  onClick={() => setSelected(gateway.id)}
                >
                  <p className={`${style.gatewayTitle} text-center mb-3`}>{gateway.title}</p>

                  <div className="d-flex gap-2 justify-content-center text-center align-items-center">
                    {gateway.logos.includes("visa") && (
                      <img src={visa} alt="visa" height="30" />
                    )}
                    {gateway.logos.includes("mastercard") && (
                      <img src={mastercard} alt="mastercard" height="30" />
                    )}
                    {gateway.logos.includes("paypal") && (
                      <img src={paypal} alt="paypal" height="35" />
                    )}
                    {gateway.logos.includes("stripe") && (
                      <img src={stripe} alt="stripe" height="35" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex justify-content-between gap-3 mt-4">
            <button className={`btn w-100 ${style.cancelBtn}`}>
              Cancel
            </button>

            <Link to={'/store-setup/payment'}
              className={`btn w-100 ${style.continueBtn}`}
              disabled={!selected}
            >
              Continue
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChooseGateway;
