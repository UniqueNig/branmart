import React from "react";
import StoreSetupNav from "../components/dashboard/home/storesetup/StoreSetupNav";
import { useNavigate } from "react-router-dom";
import BreadCrum from "../components/dashboard/home/storesetup/BreadCrum";
import Plans from "../components/pricing/Plans";
import ComparePlans from "../components/pricing/ComparePlans";
import StoreFooter from "../components/dashboard/home/storesetup/StoreFooter";

const StoreSetup = () => {


  return (
    <>
      <StoreSetupNav />
      <BreadCrum />
      <Plans/>
      <ComparePlans/>
      <StoreFooter/>
    </>
  );
};

export default StoreSetup;
