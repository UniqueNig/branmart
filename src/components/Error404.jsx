import React from "react";
import style from "./error404.module.css";
import { Link } from "react-router-dom";
import cartImg from "../assets/cart (Colorized).png";

const Error404 = () => {
  return (
    <>
      <div className={style.body}>
        <div className="container min-vh-100 d-flex align-items-center mb-5 mt-5 py-5">
          <div className="row align-items-center w-100">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
              <h1 className={style.code}>404</h1>

              <h2 className={style.title}>Page Not Found</h2>

              <p className={style.description}>
                Oops! The page you’re looking for doesn’t exist. Let’s get you
                back on track.
              </p>

              <Link to={"/"} className={`btn ${style.homeBtn}`}>
                Go to Homepage
              </Link>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="col-lg-6 text-center">
              <img src={cartImg} alt="Page not found" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
