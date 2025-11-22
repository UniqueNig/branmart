import React from "react";
import style from "../AllCss.module.css";

import visa from "../../assets/visa.png";
import paypal from "../../assets/paypal.png";
import stripe from "../../assets/stripe.png";
import amazon from "../../assets/amazon.png";
import gpay from "../../assets/gpay.png";
import payoneer from "../../assets/payoneer.png";
import paysafe from "../../assets/paysafe.png";
import pay from "../../assets/pay.png";
import mastercard from "../../assets/mastercard.png";
import verifone from "../../assets/verifone.png";
import giropay from "../../assets/giropay.png";
import greencheck from "../../assets/greencheck.png";
import orange from "../../assets/orange.png";
import bitpay from "../../assets/bitpay.png";

const FavouriteTools = () => {
  const logos = [
    visa,
    paypal,
    stripe,
    amazon,
    gpay,
    payoneer,
    paysafe,
    pay,
    mastercard,
    verifone,
    giropay,
    greencheck,
    orange,
    bitpay,
  ];

  return (
    <section className={`${style.sectionWrapperFav} text-center`}>
      <div className="container">

        <h2 className={style.titleFav}>CONNECT YOUR FAVORITE TOOLS</h2>
        <p className={style.subtitleFav}>
          Seamlessly integrate with apps you already use to run <br /> your business.
        </p>

        <div className="row justify-content-center g-5 mt-4">
          {logos.map((logo, i) => (
            <div className="col-6 col-md-3 col-lg-1" key={i}>
              <div className={style.logoBoxFav}>
                <img src={logo} alt={`logo-${i}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FavouriteTools;
