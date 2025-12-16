import React, { useEffect, useRef, useState } from "react";
import style from "./storesetupnav.module.css";
import logo from "../../../../assets/Vector.png";
import avatar from "../../../../assets/avatar.png";
import { ChevronDown, Link, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const StoreSetupNav = () => {
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
    <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
      <div className="container-fluid">
        {/* Brand */}
        <NavLink to={'/dashboard'} className={`navbar-brand ${style.brand}`} href="#">
          <img src={logo} alt="Logo" />
        </NavLink>

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
              <div className={`dropdown-item d-flex align-items-center gap-1 `}>
                <LogOut size={18} /> {/* <Link ></Link> */}
                <NavLink className={`${style.storeMenu} text-decoration-none`}>
                  {" "}
                  Log out
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StoreSetupNav;
