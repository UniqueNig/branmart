import React, { useState } from "react";
import style from "./signin.module.css";
import logo from "../../../assets/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const PasswordForgotVerify = () => {
  const navigate = useNavigate();

  const verify = useFormik({
    initialValues: {
      token: "",
    },

    onSubmit: (values) => {
      console.log("OTP Submitted:", values.token);
      navigate("/reset-password");
    },
  });

  // Collect OTP from 6 boxes
  const handleOtpChange = (index, value) => {
    let current = verify.values.token.split("");
    current[index] = value;
    verify.setFieldValue("token", current.join(""));
  };

  return (
    <>
      {/* RIGHT SIDE FORM - UPDATED UI */}
      <div className="d-flex justify-content-center  align-items-center">
        <div className={`p-4 p-md-5 w-100 shadow mt-5 ${style.formCard}`}>
          
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

          <form onSubmit={verify.handleSubmit}>
            {/* OTP INPUTS */}
            <div className="d-flex justify-content-center gap-2 mb-4">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className={`form-control text-center ${style.otpInput}`}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                />
              ))}
            </div>

            {/* Resend */}
            <p className={`${style.signuppara1} text-center mb-4`}>
              Didn’t Receive OTP?{" "}
              <span className={style.resendText}>Resend Code in 00:59</span>
            </p>

            {/* Verify Button */}
            <button type="submit" className={`btn w-100 ${style.verifyBtn}`}>
              Verify
            </button>
          </form>

          {/* Back to login */}
          <div className="text-center mt-3">
            <Link to="/sign-in" className={style.legalLink}>
              Back to Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordForgotVerify;
