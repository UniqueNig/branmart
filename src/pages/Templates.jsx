import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/template/Hero";
import PopularTemplate from "../components/template/PopularTemplate";
import WhyChoose from "../components/template/WhyChoose";
import HundredTemplate from "../components/template/HundredTemplate";
import TestimonialReviews from "../components/template/TestimonialReviews";
import CallToAction from "../components/template/CallToAction";

const Templates = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularTemplate />
      <WhyChoose />
      <HundredTemplate />
      <TestimonialReviews/>
      <CallToAction/>
      <Footer />
    </>
  );
};

export default Templates;
