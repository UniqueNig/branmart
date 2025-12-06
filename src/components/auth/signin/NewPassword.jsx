import { useFormik } from "formik";
import React from "react";
import style from "./signin.module.css";
import logo from "../../../assets/Vector.png"; // adjust path if needed
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

const NewPassword = () => {
   let navigate =  useNavigate()
  let signin = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },

    onSubmit: (values) => {
      console.log(values);
      navigate('/reset-password/success')
    },
    validationSchema: yup.object({
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
  return (
    <>
      <div className=" d-flex justify-content-center  align-items-center">
        <div className={`p-4  p-md-5 shadow mt-5 ${style.formCard}`}>
          {/* Logo */}
          <div className="text-center mb-3">
            <img src={logo} alt="logo" className={style.formLogo} />
          </div>

          <h2 className={`text-center mb-2 ${style.signuppara}`}>
            Create new password
          </h2>
          <p className={`text-center ${style.signuppara1}`}>
           Create a new password for your account. Please keep your password safe and secure!
          </p>

          <form onSubmit={signin.handleSubmit}>
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
                <div className={`${style.feedback} invalid-feedback d-block`}>
                  {signin.errors.password}
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
                  signin.touched.confirmpassword &&
                  signin.errors.confirmpassword
                    ? "form-control mb-1 is-invalid"
                    : "form-control mb-1"
                }
                placeholder="Re-enter your password"
                onChange={signin.handleChange}
                onBlur={signin.handleBlur}
              />

              {signin.touched.confirmpassword &&
                signin.errors.confirmpassword && (
                  <div className={`${style.feedback} invalid-feedback d-block`}>
                    {signin.errors.confirmpassword}
                  </div>
                )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`btn w-100 shadow mb-2 ${style.loginBtn}`}
            >
              Reset Password
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

export default NewPassword;
