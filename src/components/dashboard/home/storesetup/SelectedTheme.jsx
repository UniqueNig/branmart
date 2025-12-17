import React from "react";
import style from "./selectedtheme.module.css";
import { Rocket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SelectedTheme = () => {
  const navigate = useNavigate();

  const handleCompleteSetup = () => {
    // (Optional) Call API here

    // Persist completion
    localStorage.setItem("storeSetupComplete", "true");

    // Navigate back to dashboard
    navigate("/dashboard");
  };
  return (
    <div className="container mt-3 py-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          {/* ICON */}
          <div className="mb-3">
            <div className={style.iconWrapper}>
              <Rocket size={28} />
            </div>
          </div>

          {/* TITLE */}
          <h4 className={style.title}>READY TO LAUNCH</h4>
          <p className={style.subtitle}>
            You’ve successfully selected your theme. Let’s get your store ready
            for customers.
          </p>

          {/* SUMMARY CARD */}
          <div className={`rounded-3 p-4 my-4 ${style.summaryCard}`}>
            <div className="row">
              <div className="col-6 text-start">
                <p className={style.label}>Plan</p>
                <p className={style.value}>Pro Plan</p>
              </div>

              <div className="col-6 text-start">
                <p className={style.label}>Theme</p>
                <p className={style.value}>Avenue</p>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex justify-content-center mt-4 mb-5 gap-3 flex-wrap">
            <Link to={'/dashboard'}
              onClick={handleCompleteSetup}
              className={`btn ${style.secondaryBtn}`}
            >
              Go to Dashboard
            </Link>

            <button
              onClick={handleCompleteSetup}
              className={`btn ${style.primaryBtn}`}
            >
              Start Building Your Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedTheme;
