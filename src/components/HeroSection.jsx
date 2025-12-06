import React from "react";
import style from "./AllCss.module.css";
import HeroImg from "../assets/hero-image.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section
        className={`container ${style.heroSection} d-flex align-items-center mt-4`}
      >
        <div className="row">
          <div className="container col-lg-5 d-flex flex-column justify-content-center">
            <h1 className={style.heroHeading}>
              BUILD YOUR WEBSITE <br />
              AND ONLINE STORE IN <br />
              MINUTES
            </h1>
            <p className={style.heroPara}>
              Branmart helps you create, customize, and manage your website
              without technical skills.
            </p>
            <div className={`d-flex gap-3 ${style.heroBtnGroup}`}>
              <Link to={'/sign-up'}>
                <button className={style.registerBtn} type="submit">
                  Start for free →
                </button>
              </Link>
              <Link to={"/templates"}>
                {" "}
                <button
                  className={`btn btn-outline-light ${style["btn-outline-light"]}`}
                  type="submit"
                >
                  <img src="play-button.png" alt="" />
                  View template
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              src={HeroImg}
              className="img-fluid hero-image"
              alt="Responsive image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
