import React from "react";
import style from "./signup.module.css";
import logo from "../../../assets/Vector.png";
import Logotype from "../../../assets/Logotype.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const SignupVerify = () => {
  const navigate = useNavigate();
  let verify = useFormik({
    initialValues: {
      token: "",
    },

    onSubmit: (values) => {
      console.log("OTP Submitted:", values.token);
      navigate("/sign-in");
    },
  });
  // console.log(verify.values);

  // Collect OTP from 6 boxes
  const handleOtpChange = (index, value) => {
    let current = verify.values.token.split("");
    current[index] = value;
    verify.setFieldValue("token", current.join(""));
  };
  return (
    <>
      <div className={`container-fluid ${style.signupWrapper}`}>
        <div className="row min-vh-100">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className={`col-lg-7 d-none d-lg-block ${style.leftSection}`}>
            <div className={style.leftOverlay}>
              <img src={Logotype} alt="logo" className={style.leftLogo} />

              <div className={style.leftTextBox}>
                <h1 className={style.leftHeading}>
                  START BUILDING YOUR WEBSITE TODAY
                </h1>
                <p className={style.leftSubtext}>
                  Join Branmart and create your online store or business site
                  <br /> in minutes.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM - UPDATED UI */}

          <div className="col-lg-5 d-flex justify-content-center align-items-center">
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
                We sent a verification code to <span>adeyemi@branmart.com</span>
              </p>
              <form onSubmit={verify.handleSubmit}>
                {/* OTP INPUTS */}
                <div className="d-flex justify-content-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <input
                      key={i}
                      type="password"
                      name="token"
                      maxLength="1"
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onBlur={verify.handleBlur}
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
                  type="submit"
                  className={`btn w-100 ${style.verifyBtn}`}
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupVerify;
