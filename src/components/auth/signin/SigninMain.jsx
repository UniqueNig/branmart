import React from "react";
import style from "./signin.module.css";
import logo from "../../../assets/Vector.png"; // adjust path if needed
import Logotype from "../../../assets/Logotype.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const SigninMain = () => {
  let signin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is required")
        .email("Invalid Email Address"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, " Must be at least 8 characters."),
    }),
  });
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

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-5 my-2  d-flex justify-content-center align-items-center">
            <div className={`p-4 p-md-5 ${style.formCard}`}>
              {/* Logo */}
              <div className="text-center mb-3">
                <img src={logo} alt="logo" className={style.formLogo} />
              </div>

              <h2 className={`text-center mb-2 ${style.signuppara}`}>
                Welcome Back!
              </h2>
              <p className={`text-center ${style.signuppara1}`}>
                Don't have an account?{" "}
                <Link to={"/sign-up"} className={style.loginLink}>
                  Sign up
                </Link>
              </p>

              <form onSubmit={signin.handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <label className={`${style.formLabel} form-label`}>
                    Email*
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={
                      signin.touched.email && signin.errors.email
                        ? "form-control mb-1 is-invalid"
                        : "form-control mb-1"
                    }
                    placeholder="Enter your email"
                    onChange={signin.handleChange}
                    onBlur={signin.handleBlur}
                  />

                  {signin.touched.email && signin.errors.email && (
                    <div
                      className={`${style.feedback} invalid-feedback d-block`}
                    >
                      {signin.errors.email}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className={`${style.formLabel} form-label`}>
                    Password*
                  </label>

                  <input
                    name="password"
                    type="password"
                    className={
                      signin.touched.password && signin.errors.password
                        ? "form-control mb-1 is-invalid"
                        : "form-control mb-1"
                    }
                    placeholder="Create a password"
                    onChange={signin.handleChange}
                    onBlur={signin.handleBlur}
                  />

                  {signin.touched.password && signin.errors.password && (
                    <div
                      className={`${style.feedback} invalid-feedback d-block`}
                    >
                      {signin.errors.password}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`btn w-100 shadow mb-2 ${style.loginBtn}`}
                >
                  Log in
                </button>

                <div className="row d-flex justify-content-between mb-2">
                  <div className="col-md-6">
                    <p className={style.formLabel}>
                      <input type="checkbox" /> Remember me
                    </p>
                  </div>

                  <div className="col-md-6 ">
                    <p className={style.formLabel}>Forgot password?</p>
                  </div>
                </div>

                {/* Social Buttons */}
                <button className={`btn w-100 mb-2 ${style.socialBtn}`}>
                  <i className="bi bi-google " style={{ color: "#EA4335" }}></i>{" "}
                  Sign up with Google
                </button>

                <button className={`btn w-100 mb-2 ${style.socialBtn}`}>
                  <i className="bi bi-apple " style={{ color: "black" }}></i>{" "}
                  Sign up with Apple
                </button>

                <button className={`btn w-100 mb-2 ${style.socialBtn}`}>
                  <i className="bi bi-facebook " style={{ color: "blue" }}></i>{" "}
                  Sign up with Facebook
                </button>

                <p className={`text-center mt-2 ${style.signuppara1}`}>
                  By proceeding, you agree to the{" "}
                  <a href="#" className={style.legalLink}>
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className={style.legalLink}>
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninMain;
