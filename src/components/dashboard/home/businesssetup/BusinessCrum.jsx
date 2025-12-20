import React from "react";
import style from './businesscrum.module.css'
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";

const steps = [
  { key: "info", label: "Business Information" },
  { key: "kyc", label: "KYC Verification" },
  { key: "verify-successful", label: "" },
];
const BusinessCrum = () => {
  const location = useLocation();

  // detect current step from URL
  const currentStepIndex = steps.findIndex((step) =>
    location.pathname.includes(step.key)
  );

  const isThemeChosen = location.pathname.includes("verify-successful");
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-3 py-5 border-bottom">
        {steps.map((step, index) => {
          const isCompleted = isThemeChosen
            ? index < steps.length - 1
            : index < currentStepIndex;

          const isActive = !isThemeChosen && index === currentStepIndex;

          return (
            <div key={step.key} className="d-flex align-items-center gap-2">
              {/* ICON */}
              <div
                className={`${style.stepIcon} ${
                  isCompleted || isThemeChosen ? style.completed : ""
                } ${isActive ? style.active : ""}`}
              >
                {/* {isCompleted || isThemeChosen ? <Check size={14} /> : index + 1} */}
                {!isThemeChosen &&
                  (isCompleted ? <Check size={14} /> : index + 1)}
              </div>

              {/* LABEL */}
              <span
                className={`${style.stepLabel} ${
                  isActive ? style.activeText : ""
                }`}
              >
                {step.label}
              </span>

              {/* ARROW */}
              {index !== steps.length - 1 && (
                <span className={style.arrow}>›</span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BusinessCrum;
