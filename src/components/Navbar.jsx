import React, { useEffect, useRef } from "react";
import style from "./navbar.module.css";
import logo from "../assets/Vector.png";
import nav1 from "../assets/n1.png";
import nav2 from "../assets/n2.png";
import nav3 from "../assets/n3.png";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        const navbarCollapse = document.getElementById("navbarScroll");

        if (navbarCollapse?.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarScroll");
    navbarCollapse?.classList.remove("show");
  };

  return (
    <>
      <header>
        <nav
          ref={navbarRef}
          className={`navbar navbar-expand-lg bg-light ${style.navbar} sticky-top`}
        >
          <div className="container">
            {/* <!-- logo --> */}

            <NavLink className="navbar-brand" to={"/"}>
              <img src={logo} alt="" />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className={`nav-item ${style["nav-item"]}`}>
                  <NavLink
                    onClick={closeNavbar}
                    to="/features"
                    className={({ isActive }) =>
                      `nav-link ${style["nav-link"]} ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    Features
                  </NavLink>
                </li>

                <li className={`nav-item ${style["nav-item"]}`}>
                  <NavLink
                    onClick={closeNavbar}
                    className={({ isActive }) =>
                      `nav-link ${style["nav-link"]} ${
                        isActive ? "active" : ""
                      }`
                    }
                    to="/template"
                  >
                    Templates
                  </NavLink>
                </li>

                <li className={`nav-item ${style["nav-item"]}`}>
                  <NavLink
                    onClick={closeNavbar}
                    to="/pricing"
                    className={({ isActive }) =>
                      `nav-link ${style["nav-link"]} ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    Pricing
                  </NavLink>
                </li>

                <li className={`nav-item dropdown ${style["nav-item"]}`}>
                  <button
                    className={`nav-link dropdown-toggle ${style["nav-link"]}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    Resources
                  </button>

                  {/* MEGA MENU */}
                  <div
                    className={`dropdown-menu p-4 border-0 shadow ${style.megaMenu}`}
                  >
                    <div className="row">
                      {/* LEFT COLUMN */}
                      <div className="col-md-5 pe-md-4">
                        <h6 className={`fw-bold mb-3 ${style.megaTitle}`}>
                          Resources
                        </h6>

                        <ul className="list-unstyled">
                          <li className="d-flex align-items-start mb-4">
                            <span className={style.megaIcon}>📘</span>
                            <div className="ms-3">
                              <h6 className={`${style.megaBold} mb-1`}>Blog</h6>
                              <p className={style.megaText}>
                                The latest industry news, updates and info.
                              </p>
                            </div>
                          </li>

                          <li className="d-flex align-items-start mb-4">
                            <span className={style.megaIcon}>⭐</span>
                            <div className="ms-3">
                              <h6 className={`${style.megaBold} mb-1`}>
                                Customer stories
                              </h6>
                              <p className={style.megaText}>
                                How our customers are making big changes.
                              </p>
                            </div>
                          </li>

                          <li className="d-flex align-items-start mb-4">
                            <span className={style.megaIcon}>🎥</span>
                            <div className="ms-3">
                              <h6 className={`${style.megaBold} mb-1`}>
                                Video tutorials
                              </h6>
                              <p className={style.megaText}>
                                Get up and running on new techniques.
                              </p>
                            </div>
                          </li>

                          <li className="d-flex align-items-start">
                            <span className={style.megaIcon}>📄</span>
                            <div className="ms-3">
                              <h6 className={`${style.megaBold} mb-1`}>
                                Documentation
                              </h6>
                              <p className={style.megaText}>
                                All the boring stuff you (hopefully won’t) need.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* RIGHT COLUMN */}
                      <div className="col-md-7 ps-md-4 border-start">
                        <h6 className={`fw-bold mb-3 ${style.megaTitle}`}>
                          Latest blog posts
                        </h6>

                        {/* POST 1 */}
                        <div className="d-flex mb-4">
                          <img src={nav1} alt="" className="rounded me-3" />
                          <div>
                            <h6 className={`${style.megaBold} mb-1`}>
                              Auto-layout explained
                            </h6>
                            <p className={style.megaText}>
                              Jump right in — get an overview of the basics and…
                            </p>
                          </div>
                        </div>

                        {/* POST 2 */}
                        <div className="d-flex mb-4">
                          <img src={nav2} alt="" className="rounded me-3" />
                          <div>
                            <h6 className={`${style.megaBold} mb-1`}>
                              Top techniques to level up your product design
                            </h6>
                            <p className={style.megaText}>
                              The latest best practices and techniques to level
                              up…
                            </p>
                          </div>
                        </div>

                        {/* POST 3 */}
                        <div className="d-flex mb-4">
                          <img src={nav3} alt="" className="rounded me-3" />
                          <div>
                            <h6 className={`${style.megaBold} mb-1`}>
                              Synthesize data like a pro through affinity
                              diagramming
                            </h6>
                            <p className={style.megaText}>
                              Synthesis is the mysterious…
                            </p>
                          </div>
                        </div>

                        <NavLink
                          onClick={closeNavbar}
                          className={`fw-bold d-inline-block mt-2 ${style.megaLink}`}
                          to={"/blog"}
                        >
                          {" "}
                          All blog posts →
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`nav-item ${style["nav-item"]}`}>
                  <NavLink
                    onClick={closeNavbar}
                    className={({ isActive }) =>
                      `nav-link ${style["nav-link"]} ${
                        isActive ? "active" : ""
                      }`
                    }
                    to={"/about-us"}
                  >
                    About{" "}
                  </NavLink>
                </li>
              </ul>

              <div className="d-flex gap-3">
                <NavLink to={"/sign-in"}>
                  <button
                    className={`btn btn-light ${style.loginBtn}`}
                    type="submit"
                  >
                    Login
                  </button>
                </NavLink>
                <NavLink to={"/sign-up"}>
                  <button className={` ${style.registerBtn}`} type="submit">
                    Start for free
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
