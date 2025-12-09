import React from "react";
import style from "./blog.module.css";

const Newsletter = () => {
  return (
    <section className={`py-5 container mb-5 ${style.newsletterSection}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* LEFT TEXT */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className={`fw-bold mb-2 ${style.newsletterTitle}`}>
              Join 2,000+ subscribers
            </h3>
            <p className={style.newsletterSubtitle}>
              Stay in the loop with everything you need to know.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6">
            <form className="d-flex flex-column flex-sm-row align-items-start gap-2">
              <input
                type="email"
                className={`form-control ${style.emailInput}`}
                placeholder="Enter your email"
              />

              <button type="submit" className={`${style.subscribeBtn}`}>
                Subscribe
              </button>
            </form>

            <p className={`mt-2 small ${style.privacyText}`}>
              We care about your data in our{" "}
              <a href="#" className={style.privacyLink}>privacy policy</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
