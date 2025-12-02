import React from "react";
import style from "./signin.module.css";
import logo from "../../../assets/Vector.png"; // adjust path if needed
import { Link } from "react-router-dom";

const PasswordForgotVerify = () => {
  return (
    <>
      {/* RIGHT SIDE FORM - UPDATED UI */}
      <div className=" d-flex justify-content-center align-items-center">
        <div className={`p-4 p-md-5 w-100 ${style.formCard}`}>
          {/* Logo */}
          <div className="text-center mb-4">
            <img src={logo} alt="logo" className={style.formLogo} />
          </div>

          {/* Email Icon */}
          <div className="text-center mb-3">
            <div className={style.emailIconBox}>
              <i className={`bi bi-envelope-fill ${style.emailIcon}`}></i>
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-center mb-2 ${style.signuppara}`}>
            Check your email
          </h3>

          {/* Subtitle */}
          <p className={`text-center text-muted mb-4 ${style.signuppara1}`}>
            We sent a verification code to adeyemi@branmart.com. Enter this code
            to reset your password.
          </p>

          {/* OTP INPUTS */}
          <div className="d-flex justify-content-center gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <input
                key={i}
                type="password"
                maxLength="1"
                className={`form-control text-center ${style.otpInput}`}
              />
            ))}
          </div>

          {/* Resend */}
          <p className={`${style.signuppara1} text-center mb-4`}>
            Didn’t Receive OTP?{" "}
            <span className={style.resendText}>Resend Code in 00:59</span>
          </p>

          {/* Verify Button */}
          <button
            type="button"
            className={`btn w-100 ${style.verifyBtn}`}
            disabled
          >
            Verify
          </button>

          <div className="text-center">
            <Link to={"/sign-in"} className={` ${style.legalLink}`}>
              Back to Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordForgotVerify;
