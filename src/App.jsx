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
import VerifyEmail from "./pages/VerifyEmail";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyForgotPassword from "./pages/VerifyForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordSuccess from "./pages/ResetPasswordSuccess";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import HelpCentre from "./pages/HelpCentre";
// import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import StoreSetup from "./pages/StoreSetup";
import HowtoPay from "./pages/HowtoPay";
import StoreSetupPayment from "./pages/StoreSetupPayment";
import PaymentSuccess from "./pages/PaymentSuccess";
import ChooseTheme from "./pages/ChooseTheme";
import ThemeChoosen from "./pages/ThemeChoosen";
import NotFound from "./pages/NotFound";
import BusinessSetup from "./pages/BusinessSetup";
import KycVerification from "./pages/KycVerification";
import KycSuccess from "./pages/KycSuccess";
// import './App.css'

function App() {
  const location = useLocation();
  useEffect(() => {
    initScrollAnimations();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* Wildcard Route */}
        <Route path="*" element={<NotFound />} />

        {/* Main pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/template" element={<Templates />} />
        <Route path="/templates" element={<AllTemplates />} />
        <Route path="/template-details" element={<TemplateDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/help-centre" element={<HelpCentre />} />

        {/* Auth pages */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/verify-email" element={<VerifyEmail />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/forgot-password/verify"
          element={<VerifyForgotPassword />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/reset-password/success"
          element={<ResetPasswordSuccess />}
        />

        {/* Dashboard parent route */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>

        {/* Store Setup route */}
        <Route path="store-setup/plan" element={<StoreSetup />} />
        <Route path="choose-gateway" element={<HowtoPay />} />
        <Route path="store-setup/payment" element={<StoreSetupPayment />} />
        <Route
          path="store-setup/payment-success"
          element={<PaymentSuccess />}
        />
        <Route path="store-setup/theme" element={<ChooseTheme />} />
        <Route path="store-setup/theme-chosen" element={<ThemeChoosen />} />

        {/* Business Setup Route */}
        <Route path="business-setup/info" element={<BusinessSetup />} />
        <Route path="business-setup/kyc" element={<KycVerification />} />
        <Route path="business-setup/kyc-success" element={<KycSuccess />} />
      </Routes>
    </>
  );
}

export default App;
