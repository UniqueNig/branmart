import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/alltemplates/Hero";
import GetStarted from "../components/alltemplates/GetStarted";
import Shoptemplates from "../components/alltemplates/Shoptemplates";

const AllTemplates = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shoptemplates />
      <GetStarted />
      <Footer />
    </>
  );
};

export default AllTemplates;
