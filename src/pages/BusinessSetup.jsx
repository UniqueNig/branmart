import React from "react";
import StoreSetupNav from "../components/dashboard/home/storesetup/StoreSetupNav";
import StoreFooter from "../components/dashboard/home/storesetup/StoreFooter";
import BusinessCrum from "../components/dashboard/home/businesssetup/BusinessCrum";
import BusinessInfo from "../components/dashboard/home/businesssetup/BusinessInfo";

const BusinessSetup = () => {
  return (
    <>
      <StoreSetupNav />
      <BusinessCrum />
      <BusinessInfo/>
      <StoreFooter />
    </>
  );
};

export default BusinessSetup;
