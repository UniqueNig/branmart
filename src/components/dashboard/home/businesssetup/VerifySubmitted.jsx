import React from "react";
import style from "./verifysubmitted.module.css";
import { Check, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const VerifySubmitted = () => {
  const navigate = useNavigate();

  const handleProfileComplete = () => {
    // (Optional) Call API here

    // Persist completion
    localStorage.setItem("businessProfileComplete", "true");

    // Navigate back to dashboard
    navigate("/dashboard");
  };
  return (
    <>
      <div className="modal d-block">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content p-4 shadow rounded-4 ${style.card}`}>
            {/* ICON */}
            <div className="text-center mb-3">
              <div className={style.successIcon}>
                {/* <Check size={28} /> */}
                <CheckCircle size={28} />
              </div>
            </div>

            {/* TITLE */}
            <div className="text-center mb-3">
              <h5 className={style.title}>PAYMENT SUCCESSFUL</h5>
              <p className={style.subtitle}>
                Your documents have been received and are currently under
                review. This process helps us confirm your identity and ensure a
                safe marketplace for all sellers and buyers. <br /> You can continue
                using your dashboard while we review your information. Some
                features may remain limited until your account is verified.
              </p>
            </div>

            {/* ACTIONS */}
            <Link
              onClick={handleProfileComplete}
              to={'/dashboard'}
              className={`btn w-100 mb-2 ${style.primaryBtn}`}
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifySubmitted;
