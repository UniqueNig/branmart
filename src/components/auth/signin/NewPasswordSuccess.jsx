import React from "react";
import style from "./signin.module.css";
import logo from "../../../assets/Vector.png"; // adjust path if needed
import { Link } from "react-router-dom";

const NewPasswordSuccess = () => {
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
            <div className={style.successIconBox}>
              <i className={`bi bi-check-circle ${style.successIcon}`}></i>
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-center mb-2 ${style.signuppara}`}>Success!</h3>

          {/* Subtitle */}
          <p className={`text-center text-muted mb-4 ${style.signuppara1}`}>
            Your password has been successfully reset. <br /> You will now be
            redirected to the login page to log in with your new <br /> password.
          </p>

          {/* Back to login */}
          <div className="text-center mt-3">
            <Link to="/sign-in" >
                      <button
                        type="submit"
                        className={`btn w-100 shadow mb-2 ${style.loginBtn}`}
                      >
                        Continue to login
                      </button>
            </Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPasswordSuccess;
