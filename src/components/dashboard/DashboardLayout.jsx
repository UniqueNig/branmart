import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Safe window check (important for SSR)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 992 : false
  );

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure sidebar behaves correctly when switching to mobile
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true); // Sidebar hidden on mobile by default
    }
  }, [isMobile]);

  return (
    <div className="d-flex">
      {/* SIDEBAR */}
      <SideBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
      />

      {/* MAIN CONTENT */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: isMobile
            ? "0px" // sidebar hidden on mobile
            : collapsed
            ? "0" // collapsed desktop width
            : "0", // full desktop width
          transition: "margin-left 0.3s ease",
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <TopBar setCollapsed={setCollapsed} isMobile={isMobile} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
