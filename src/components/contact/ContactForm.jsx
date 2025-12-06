import React from "react";
import style from "./contact.module.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="container py-5">
      {/* Top text */}
      <p className={style.titleSmall}>Contact us</p>
      <h2 className={style.mainTitle}>WE’RE HERE TO HELP</h2>
      <p className={style.subtitle}>
        Whether you have a question, need help, or want to partner with us, our
        team is ready to assist.
      </p>

      {/* Form */}
      <form className="mx-auto" style={{ maxWidth: "650px" }}>
        <div className="row g-3">
          {/* First & Last Name */}
          <div className="col-md-6">
            <label className={`form-label ${style.formLabel}`}>
              First name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="col-md-6">
            <label className={`form-label ${style.formLabel}`}>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          {/* Email */}
          <div className="col-12">
            <label className={`form-label ${style.formLabel}`}>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@company.com"
            />
          </div>

          {/* Phone */}
          <div className="col-12">
            <label className={`form-label ${style.formLabel}`}>
              Phone number
            </label>
            <div className="input-group">
              <select
                className={`${style.formSelect} form-select`}
                style={{ maxWidth: "90px" }}
              >
                <option>US</option>
                <option>NG</option>
                <option>UK</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Message */}
          <div className="col-12">
            <label className={`form-label ${style.formLabel}`}>Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>

          {/* Checkbox */}
          <div className="col-12 d-flex align-items-center gap-2">
            <input type="checkbox" />
            <span className={style.agree}>
              You agree to our friendly <Link className={style.agree} to={''}>privacy policy </Link>.
            </span>
          </div>

          {/* Button */}
          <div className="col-12">
            <button className={style.sendBtn}>Send message</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
