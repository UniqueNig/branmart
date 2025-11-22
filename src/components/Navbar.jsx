import React from "react";
import style from "./AllCss.module.css";
import logo from "../assets/Vector.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
<header>
  <nav
    className={`navbar navbar-expand-lg bg-body-light ${style.navbar}`}
  >
    <div className="container">
      {/* <!-- logo --> */}

      <Link className="navbar-brand" to={'/'}>
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
            <Link className={`nav-link ${style["nav-link"]}`} to="/template">
              Templates
            </Link>
          </li>

          <li className={`nav-item ${style["nav-item"]}`}>
            <a className={`nav-link ${style["nav-link"]}`}>Pricing</a>
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

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item">Action</a>
              </li>
              <li>
                <a className="dropdown-item">Another action</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item">Something else here</a>
              </li>
            </ul>
          </li>

          <li className={`nav-item ${style["nav-item"]}`}>
            <a className={`nav-link ${style["nav-link"]}`}>About</a>
          </li>
        </ul>

        <div className="d-flex gap-3">
          <button className={`btn btn-light ${style.loginBtn}`} type="submit">
            Login
          </button>
          <button className={style.registerBtn} type="submit">
            Start for free
          </button>
        </div>
      </div>
    </div>
  </nav>
</header>

    </>
  );
};

export default Navbar;
