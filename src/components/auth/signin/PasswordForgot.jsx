import React from "react";
import style from "./signin.module.css";
import logo from "../../../assets/Vector.png"; // adjust path if needed
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const PasswordForgot = () => {
  let navigate = useNavigate();
  let signin = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      console.log(values);
      navigate('/forgot-password/verify')
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is required")
        .email("Invalid Email Address"),
    }),
  });
  return (
    <>
      <div className=" d-flex justify-content-center  align-items-center">
        <div className={`p-4  p-md-5 shadow mt-5 ${style.formCard}`}>
          {/* Logo */}
          <div className="text-center mb-3">
            <img src={logo} alt="logo" className={style.formLogo} />
          </div>

          <h2 className={`text-center mb-2 ${style.signuppara}`}>
            Forgot your Password?
          </h2>
          <p className={`text-center ${style.signuppara1}`}>
            Enter your email address to receive a code to reset your password.
          </p>

          <form onSubmit={signin.handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label className={`${style.formLabel} form-label`}>Email*</label>
              <input
                name="email"
                type="email"
                className={
                  signin.touched.email && signin.errors.email
                    ? "form-control mb-1 is-invalid"
                    : "form-control mb-1"
                }
                placeholder="Enter your registered email address"
                onChange={signin.handleChange}
                onBlur={signin.handleBlur}
              />

              {signin.touched.email && signin.errors.email && (
                <div className={`${style.feedback} invalid-feedback d-block`}>
                  {signin.errors.email}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`btn w-100 shadow mb-2 ${style.createBtn}`}
            >
              send reset code
            </button>

            <div className="text-center">
              <Link to={"/sign-in"} className={` ${style.legalLink}`}>
                Back to Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordForgot;
