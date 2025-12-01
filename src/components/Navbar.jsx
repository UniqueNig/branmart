import React from "react";
import style from "./AllCss.module.css";
import logo from "../assets/Vector.png";
import nav1 from "../assets/n1.png";
import nav2 from "../assets/n2.png";
import nav3 from "../assets/n3.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg bg-body-light ${style.navbar} sticky-top`}
        >
          <div className="container">
            {/* <!-- logo --> */}

            <Link className="navbar-brand" to={"/"}>
              <img src={logo} alt="" />
            </Link>

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
                  <Link
                    className={`nav-link active ${style["nav-link"]}`}
                    aria-current="page"
                    to="/features"
                  >
                    Features
                  </Link>
                </li>

                <li className={`nav-item ${style["nav-item"]}`}>
                  <Link
                    className={`nav-link ${style["nav-link"]}`}
                    to="/template"
                  >
                    Templates
                  </Link>
                </li>

                <li className={`nav-item ${style["nav-item"]}`}>
                  <Link
                    className={`nav-link ${style["nav-link"]}`}
                    to={"/pricing"}
                  >
                    Pricing{" "}
                  </Link>
                </li>

                <li className={`nav-item dropdown ${style["nav-item"]}`}>
                  <a
                    className={`nav-link dropdown-toggle ${style["nav-link"]}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>

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

                        <a
                          className={`fw-bold d-inline-block mt-2 ${style.megaLink}`}
                          href="#"
                        >
                          All blog posts →
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`nav-item ${style["nav-item"]}`}>
                  <Link
                    className={`nav-link ${style["nav-link"]}`}
                    to={"/about-us"}
                  >
                    About{" "}
                  </Link>
                </li>
              </ul>

              <div className="d-flex gap-3">
                <button
                  className={`btn btn-light ${style.loginBtn}`}
                  type="submit"
                >
                  Login
                </button>
                <Link to={"/sign-up"}>
                  <button className={` ${style.registerBtn}`} type="submit">
                    Start for free
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
