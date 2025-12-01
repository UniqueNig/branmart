import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../src/components/globalAnimations.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Features from "./pages/Features";
import { initScrollAnimations } from "./utils/AllJS";
import Templates from "./pages/Templates";
import AllTemplates from "./pages/AllTemplates";
import TemplateDetails from "./pages/TemplateDetails";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
// import './App.css'

function App() {

  const location = useLocation()
  useEffect(() => {
    initScrollAnimations();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/template" element={<Templates/>}/>
        <Route path="/templates" element={<AllTemplates/>}/>
        <Route path="/template-details" element={<TemplateDetails/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
