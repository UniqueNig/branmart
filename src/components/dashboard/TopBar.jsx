import React, { useState, useEffect, useRef } from "react";
import style from "./topbar.module.css";
import avatar from "../../assets/avatar.png";
import { Bell, ChevronDown, Search, Menu, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const TopBar = ({ setCollapsed, isMobile }) => {
  const PAGE_META = [
    {
      path: "/dashboard",
      title: "Welcome back, {{name}}",
      subtitle: "Here is a quick view of your store activity.",
      exact: true,
    },
    {
      path: "/dashboard/products",
      title: "Products",
      subtitle: "Manage and organize your products here.",
    },
    {
      path: "/dashboard/add-product",
      title: "Products",
      subtitle: "Manage and organize your products here.",
    },
    {
      path: "/orders",
      title: "Orders",
      subtitle: "Track and manage customer orders.",
    },
    {
      path: "/customers",
      title: "Customers",
      subtitle: "View and manage your customers.",
    },
    {
      path: "/payments",
      title: "Payments",
      subtitle: "Review transactions and payouts.",
    },
    {
      path: "/marketing",
      title: "Marketing",
      subtitle: "Promote your store and increase sales.",
    },
    {
      path: "/settings",
      title: "Settings",
      subtitle: "Manage your account and preferences.",
    },
  ];

  const location = useLocation();

  const pageMeta = PAGE_META.find((page) =>
    page.exact
      ? location.pathname === page.path
      : location.pathname.startsWith(page.path)
  ) || {
    title: "Dashboard",
    subtitle: "Overview of your store activity.",
  };

  const user = {
    name: "Olivia",
  };

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={style.topbar}>
      <div className="d-flex justify-content-between align-items-center px-4 py-3">
        {/* MOBILE MENU BUTTON */}
        {isMobile && (
          <button
            className="btn btn-light me-3"
            onClick={() => setCollapsed((prev) => !prev)} // FIX #1
          >
            <Menu size={18} />
          </button>
        )}

        <div>
          <h5 className={`${style.welcome} fw-semibold m-0`}>
            {pageMeta.title.replace("{{name}}", user.name)}
          </h5>
          <p className={`${style.quickText} m-0`}>{pageMeta.subtitle}</p>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="position-relative d-none d-md-block">
            <input
              type="text"
              className="form-control rounded-5 ps-5"
              placeholder="Search"
              style={{ width: "260px" }}
            />
            <Search
              size={18}
              className="position-absolute"
              style={{ left: "14px", top: "10px", color: "#888" }}
            />
          </div>

          <button className="btn btn-light rounded-circle">
            <Bell size={18} />
          </button>

          {/* PROFILE DROPDOWN */}
          <div
            className={`${style.profileBox} position-relative`}
            ref={dropdownRef}
          >
            {" "}
            {/* FIX #2 */}
            <button
              className="btn d-flex align-items-center gap-2"
              onClick={() => setOpen(!open)}
            >
              <img
                src={avatar}
                height="34"
                className="rounded-circle"
                alt="profile"
              />
              <span className={`${style.myStore} d-none d-md-inline`}>
                My Store
              </span>

              <ChevronDown
                size={16}
                style={{
                  transition: "0.2s",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end p-3 shadow"
              style={{ display: open ? "block" : "none" }}
            >
              <li className="d-flex align-items-center gap-3 px-2 py-2 border-bottom">
                <img src={avatar} height="40" className="rounded-circle" />
                <div>
                  <p className={`${style.storeMenu} m-0 `}>Olivia Rhye</p>
                  <p className={`${style.storeMenup} m-0 `}>
                    olivia_rhye@gmail.com
                  </p>
                </div>
              </li>

              <li>
                <a className={`${style.storeMenu} dropdown-item py-2`}>
                  View profile
                </a>
              </li>
              <li>
                <a className={`${style.storeMenu} dropdown-item py-2`}>
                  Settings
                </a>
              </li>
              <div className="dropdown-divider"></div>
              <li>
                <div
                  className={`dropdown-item d-flex align-items-center gap-1 `}
                >
                  <LogOut size={18} />{" "}
                  <Link className={`${style.storeMenu} text-decoration-none`}>
                    Log out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
