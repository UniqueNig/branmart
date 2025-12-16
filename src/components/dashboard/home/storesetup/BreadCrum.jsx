import React from "react";
import { useLocation } from "react-router-dom";
import style from "./breadcrum.module.css";
import { Check } from "lucide-react";

const steps = [
  { key: "plan", label: "Select plan" },
  { key: "payment", label: "Make payment" },
  { key: "theme", label: "Choose a theme" },
];

const BreadCrum = () => {
  const location = useLocation();

  // detect current step from URL
  const currentStepIndex = steps.findIndex(step =>
    location.pathname.includes(step.key)
  );

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 py-5 border-bottom">

      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isActive = index === currentStepIndex;

        return (
          <div key={step.key} className="d-flex align-items-center gap-2">

            {/* ICON */}
            <div
              className={`${style.stepIcon} ${
                isCompleted ? style.completed : ""
              } ${isActive ? style.active : ""}`}
            >
              {isCompleted ? <Check size={14} /> : index + 1}
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
  );
};

export default BreadCrum;
