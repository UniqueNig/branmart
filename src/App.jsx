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
      </Routes>
    </>
  );
}

export default App;
