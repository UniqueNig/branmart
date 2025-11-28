import React from "react";
import style from "../AllCss.module.css";
import heroImg from "../../assets/about-hero.png"; // <-- replace with your real image

const Hero = () => {
  return (
    <section className={`${style.heroSection1} py-5`}>
      <div className="container text-center">
        {/* HEADING */}
        <h1 className={`${style.heroHeading1} fw-bold mb-3`}>
          POWERING BUSINESSES TO <br /> BUILD AND GROW ONLINE
        </h1>

        {/* SUBTEXT */}
        <p className={`${style.heroSubtext1} mb-5`}>
          Branmart makes it simple for anyone to create a professional website,{" "}
          <br /> manage their store, and sell online without technical skills.
        </p>

        {/* IMAGE */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className={`${style.heroImageWrapper1} rounded-4 overflow-hidden`}
            >
              <img
                src={heroImg}
                alt="Business people smiling"
                className="img-fluid w-100 d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
