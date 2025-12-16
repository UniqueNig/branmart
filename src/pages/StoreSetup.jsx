import React from "react";
import StoreSetupNav from "../components/dashboard/home/storesetup/StoreSetupNav";
import { useNavigate } from "react-router-dom";
import BreadCrum from "../components/dashboard/home/storesetup/BreadCrum";
import Plans from "../components/pricing/Plans";
import ComparePlans from "../components/pricing/ComparePlans";

const StoreSetup = () => {
  const navigate = useNavigate();

  const handleCompleteSetup = () => {
    // (Optional) Call API here

    // Persist completion
    localStorage.setItem("storeSetupComplete", "true");

    // Navigate back to dashboard
    navigate("/dashboard");
  };

  return (
    <>
      <StoreSetupNav />
      <BreadCrum />
      <Plans/>
      <ComparePlans/>
      {/* Example completion button */}
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={handleCompleteSetup}>
          Finish Store Setup
        </button>
      </div>
    </>
  );
};

export default StoreSetup;
