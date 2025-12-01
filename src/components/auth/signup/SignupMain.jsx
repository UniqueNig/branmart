import React from "react";
import style from "./signup.module.css";
import logo from "../../../assets/Vector.png"; // adjust path if needed
import Logotype from "../../../assets/Logotype.png";
import { useFormik } from "formik";
import * as yup from "yup";

const SignupMain = () => {
  let signup = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      accounttype: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .required("Firstname is required")
        .min(3, "Firstname is too short"),
      lastname: yup
        .string()
        .required("Lastname is required")
        .min(3, "Lastname is too short"),
      email: yup
        .string()
        .required("Email is required")
        .email("Invalid Email Address"),
      accounttype: yup.string().required("Account Type is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, " Must be at least 8 characters."),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords does not match")
        .required("Confirm your password"),
    }),
  });

  //  console.log(signup.values);
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
                Sign up
              </h2>
              <p className={`text-center ${style.signuppara1}`}>
                Already have an account?{" "}
                <a href="#" className={style.loginLink}>
                  Log in
                </a>
              </p>

              <form onSubmit={signup.handleSubmit}>
                {/* First + Last Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={`${style.formLabel} form-label`}>
                      First name*
                    </label>
                    <input
                      name="firstname"
                      type="text"
                      className={
                        signup.touched.firstname && signup.errors.firstname
                          ? "form-control mb-1 is-invalid"
                          : "form-control mb-1"
                      }
                      placeholder="Enter your first name"
                      onChange={signup.handleChange}
                      onBlur={signup.handleBlur}
                    />

                    {signup.touched.firstname && signup.errors.firstname && (
                      <div className={`${style.feedback} invalid-feedback d-block`}>
                        {signup.errors.firstname}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className={`${style.formLabel} form-label`}>
                      Last name*
                    </label>
                    <input
                      name="lastname"
                      type="text"
                      className={
                        signup.touched.lastname && signup.errors.lastname
                          ? "form-control mb-1 is-invalid"
                          : "form-control mb-1"
                      }
                      placeholder="Enter your last name"
                      onChange={signup.handleChange}
                      onBlur={signup.handleBlur}
                    />

                    {signup.touched.lastname && signup.errors.lastname && (
                      <div className={`${style.feedback} invalid-feedback d-block`}>
                        {signup.errors.lastname}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className={`${style.formLabel} form-label`}>
                    Email*
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={
                      signup.touched.email && signup.errors.email
                        ? "form-control mb-1 is-invalid"
                        : "form-control mb-1"
                    }
                    placeholder="Enter your email"
                    onChange={signup.handleChange}
                    onBlur={signup.handleBlur}
                  />

                  {signup.touched.email && signup.errors.email && (
                    <div className={`${style.feedback} invalid-feedback d-block`}>
                      {signup.errors.email}
                    </div>
                  )}
                </div>

                {/* Account Type */}
                <div className="mb-3">
                  <label className={`${style.formLabel} form-label`}>
                    Account Type
                  </label>

                  <select
                    className={
                      signup.touched.accounttype && signup.errors.accounttype
                        ? "form-select mb-1 is-invalid"
                        : `form-select mb-1  ${style.formSelect}`
                    }
                    onChange={signup.handleChange}
                    onBlur={signup.handleBlur}
                    name="accounttype"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="personal">Individual</option>
                    <option value="business">Business</option>
                    <option value="agency">Agency</option>
                  </select>

                  {signup.touched.accounttype && signup.errors.accounttype && (
                    <div className={`${style.feedback} invalid-feedback d-block`}>
                      {signup.errors.accounttype}
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
                      signup.touched.password && signup.errors.password
                        ? "form-control mb-1 is-invalid"
                        : "form-control mb-1"
                    }
                    placeholder="Create a password"
                    onChange={signup.handleChange}
                    onBlur={signup.handleBlur}
                  />

                  {signup.touched.password && signup.errors.password && (
                    <div className={`${style.feedback} invalid-feedback d-block`}>
                      {signup.errors.password}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className={`${style.formLabel} form-label`}>
                    Confirm Password*
                  </label>

                  <input
                    name="confirmpassword"
                    type="password"
                    className={
                      signup.touched.confirmpassword &&
                      signup.errors.confirmpassword
                        ? "form-control mb-1 is-invalid"
                        : "form-control mb-1"
                    }
                    placeholder="Re-enter your password"
                    onChange={signup.handleChange}
                    onBlur={signup.handleBlur}
                  />

                  {signup.touched.confirmpassword &&
                    signup.errors.confirmpassword && (
                      <div className={`${style.feedback} invalid-feedback d-block`}>
                        {signup.errors.confirmpassword}
                      </div>
                    )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`btn w-100 shadow mb-2 ${style.createBtn}`}
                >
                  Create account
                </button>

                <div className="text-center mb-2">Or</div>

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

export default SignupMain;
