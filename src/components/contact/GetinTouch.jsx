import React from "react";
import style from "./contact.module.css";

const GetinTouch = () => {
  return (
    <div className="container py-5">

      {/* Title */}
      <h2 className={style.sectionTitle}>GET IN TOUCH WITH THE RIGHT TEAM</h2>
      <p className={style.sectionSubtitle}>
        Choose the best way to contact us based on your needs.
      </p>

      {/* Cards */}
      <div className="row g-4 mt-4">

        {/* Sales */}
        <div className="col-md-6 col-lg-3">
          <div className={style.cardBox}>
            <div className={style.iconBox}>
              <i className="bi bi-envelope-fill"></i>
            </div>
            <p className={style.cardTitle}>Chat to sales</p>
            <p className={style.cardText}>
              For business inquiries, collaborations, or enterprise solutions.
            </p>
            <p className={style.cardEmail}>sales@branmart.com</p>
          </div>
        </div>

        {/* Support */}
        <div className="col-md-6 col-lg-3">
          <div className={style.cardBox}>
            <div className={style.iconBox}>
              <i className="bi bi-chat-dots-fill"></i>
            </div>
            <p className={style.cardTitle}>Chat to support</p>
            <p className={style.cardText}>
              Need help with your website or account? Our team is available 24/7.
            </p>
            <p className={style.cardEmail}>support@branmart.com</p>
          </div>
        </div>

        {/* Partnerships */}
        <div className="col-md-6 col-lg-3">
          <div className={style.cardBox}>
            <div className={style.iconBox}>
              <i className="bi bi-people-fill"></i>
            </div>
            <p className={style.cardTitle}>Partnerships</p>
            <p className={style.cardText}>
              Interested in collaborating or integrating with Branmart? Let's talk.
            </p>
            <p className={style.cardEmail}>partners@branmart.com</p>
          </div>
        </div>

        {/* Call Us */}
        <div className="col-md-6 col-lg-3">
          <div className={style.cardBox}>
            <div className={style.iconBox}>
              <i className="bi bi-telephone-fill"></i>
            </div>
            <p className={style.cardTitle}>Call us</p>
            <p className={style.cardText}>
              Mon–Fri from 8am to 5pm.
            </p>
            <p className={style.cardEmail}>+1 (555) 000-0000</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetinTouch;
