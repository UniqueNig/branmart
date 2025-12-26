import React, { useState } from "react";
import style from "./sidebar.module.css";
import {
  House,
  Globe,
  Settings,
  CircleHelp,
  ChevronDown,
  CreditCard,
  Megaphone,
  HelpCircle,
  LogOut,
  Boxes,
  ShoppingCart,
  Users,
  CircleCheckBig,
  Orbit,
  Sidebar,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/Vector.png";

const SideBar = ({ collapsed, setCollapsed, isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <aside
      className={` ${style.sidebar}
    ${collapsed && !isMobile ? style.collapsed : ""}
    ${isMobile && !collapsed ? style.sidebarOpen : ""}
  `}
      style={{
        position: isMobile ? "fixed" : "relative",
        left: isMobile ? undefined : "0",
        top: 0,
        height: "100vh",
        zIndex: 2000,
        transition: "0.3s ease",
      }}
    >
      {/* HEADER */}
      <div className="d-flex justify-content-between px-3 py-3 border-bottom align-items-center mb-4">
        {!collapsed && <img src={logo} className={style.logo} alt="logo" />}

        {/* COLLAPSE/OPEN BUTTON */}
        <button
          className="btn btn-sm border-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Sidebar
            size={18}
            className="me-2"
            style={{ width: "16px", height: "20px", color: "#717680" }}
          />
        </button>
      </div>

      {/* Nav Links */}
      <ul className="nav flex-column list-unstyled">
        {/* Home */}
        <li className="nav-item mb-2">
          <Link
            to={"/dashboard"}
            className={`nav-link ${style["nav-link"]} d-flex align-items-center ${style.activeLink}`}
          >
            <House size={18} className="me-2" />
            {!collapsed && "Home"}
          </Link>
        </li>

        {/* Products */}
        <li className="nav-item mb-2">
          <Link
          to={'/dashboard/products'}
            className={`nav-link ${style["nav-link"]} d-flex justify-content-between align-items-center`}
            onClick={() => toggleDropdown("products")}
          >
            <div className="d-flex align-items-center">
              <Boxes
                size={18}
                className="me-2"
                style={{ width: "16px", height: "20px", color: "#717680" }}
              />
              {!collapsed && "Products"}
            </div>

            {!collapsed && (
              <ChevronDown
                size={16}
                style={{
                  transform:
                    openDropdown === "products"
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  transition: "0.3s",
                }}
              />
            )}
          </Link>

          {!collapsed && openDropdown === "products" && (
            <ul className={`ms-4 mt-1`}>
              <li>
                <Link to={'/dashboard/add-product'} className={`nav-link ${style["nav-link"]}`}>Add Product</Link>
              </li>
              <li>
                <Link to={'/dashboard/products'} className={`nav-link ${style["nav-link"]}`}>All Products</Link>
              </li>

            </ul>
          )}
        </li>

        {/* Orders */}
        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${style["nav-link"]} nav-link d-flex align-items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            <ShoppingCart
              size={18}
              className="me-2"
              style={{ width: "16px", height: "20px", color: "#717680" }}
            />

            {!collapsed && "Orders"}
          </NavLink>
        </li>

        {/* Customers */}
        <li className="nav-item mb-2">
          <Link
            className={`nav-link ${style["nav-link"]} d-flex align-items-center`}
          >
            <Users
              size={18}
              className="me-2"
              style={{ width: "16px", height: "20px", color: "#717680" }}
            />
            {!collapsed && "Customers"}
          </Link>
        </li>

        {/* STORE BUILDER */}
        <li className="nav-item mb-2">
          <Link
            className={`nav-link ${style["nav-link"]} d-flex justify-content-between align-items-center`}
            onClick={() => toggleDropdown("store")}
          >
            <div className="d-flex align-items-center">
              <Globe
                size={18}
                className="me-2"
                style={{ width: "16px", height: "20px", color: "#717680" }}
              />
              {!collapsed && "Store Builder"}
            </div>

            {!collapsed && (
              <ChevronDown
                size={16}
                style={{
                  transform:
                    openDropdown === "store" ? "rotate(180deg)" : "rotate(0)",
                  transition: "0.3s",
                }}
              />
            )}
          </Link>

          {!collapsed && openDropdown === "store" && (
            <ul className={`ms-4 mt-1`}>
              <li>
                <a className={`nav-link ${style["nav-link"]}`}>Templates</a>
              </li>
              <li>
                <a className={`nav-link ${style["nav-link"]}`}>Pages</a>
              </li>
              <li>
                <a className={`nav-link ${style["nav-link"]}`}>Preferences</a>
              </li>
            </ul>
          )}
        </li>

        {/* Payments */}
        <li className="nav-item mb-2">
          <Link
            className={`nav-link ${style["nav-link"]} d-flex align-items-center`}
          >
            <CreditCard
              size={18}
              className="me-2"
              style={{ width: "16px", height: "20px", color: "#717680" }}
            />
            {!collapsed && "Payments"}
          </Link>
        </li>

        {/* Marketing */}
        <li className="nav-item mb-2">
          <Link
            className={`nav-link ${style["nav-link"]} d-flex align-items-center`}
          >
            <Orbit
              size={18}
              className="me-2"
              style={{ width: "16px", height: "20px", color: "#717680" }}
            />
            {!collapsed && "Marketing"}
          </Link>
        </li>

        {/* Settings */}
        <li className="nav-item mb-2">
          <Link
            className={`nav-link ${style["nav-link"]} d-flex justify-content-between align-items-center`}
            onClick={() => toggleDropdown("settings")}
          >
            <div className="d-flex align-items-center">
              <Settings
                size={18}
                className="me-2"
                style={{ width: "16px", height: "20px", color: "#717680" }}
              />
              {!collapsed && "Settings"}
            </div>

            {!collapsed && (
              <ChevronDown
                size={16}
                style={{
                  transform:
                    openDropdown === "settings"
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  transition: "0.3s",
                }}
              />
            )}
          </Link>

          {!collapsed && openDropdown === "settings" && (
            <ul className={`ms-4 mt-1 `}>
              <li>
                <a className={`nav-link ${style["nav-link"]}`}>Setting1</a>
              </li>
              <li>
                <a className={`nav-link ${style["nav-link"]}`}>Setting2</a>
              </li>
              <li>
                <a className={`nav-link ${style["nav-link"]}`}>Setting3</a>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item mb-2">
          <Link
            className={`nav-link ${style["nav-link"]} d-flex align-items-center`}
          >
            <HelpCircle
              size={18}
              className="me-2"
              style={{ width: "16px", height: "20px", color: "#717680" }}
            />
            {!collapsed && "Support"}
          </Link>
        </li>
      </ul>

      {/* TRIAL NOTICE */}
      <div className={`p-3 mt-3 ${style.trialBox}`}>
        <h4 className={style.trialTitle}>
          {" "}
          {!collapsed && "Less than a day left in your trial"}
        </h4>
        <p className="small mb-1">
          {" "}
          {!collapsed && "Your trial ends on November 15"}
        </p>
        <p className="small mb-2"> {!collapsed && "Select a plan and get."}</p>
        <div className="d-flex gap-2">
          <button className={`btn btn-link p-0 ${style.dismissBtn}`}>
            {!collapsed && "Dismiss"}
          </button>
          <button className={`btn p-0 ${style.upgradeBtn}`}>
            {!collapsed && "  Upgrade plan"}
          </button>
        </div>
      </div>

      {/* USER PROFILE */}
      <div
        className={`d-flex align-items-center mb-3  mt-5 p-3 ${style.userBox}`}
      >
        {!collapsed && (
          <img src={avatar} alt="profile" className={style.avatar} />
        )}

        <div className="ms-2 me-3">
          <p className={`mb-0 ${style.userName}`}>
            {!collapsed && "Olivia Rhye"}
          </p>
          <p className={`${style.userEmail} small mb-0 text-muted`}>
            {" "}
            {!collapsed && "olivia@gmail.com"}
          </p>
        </div>

        <Link>
          <LogOut
            className="ms-auto"
            size={18}
            style={{ width: "16px", height: "20px", color: "#717680" }}
          />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
