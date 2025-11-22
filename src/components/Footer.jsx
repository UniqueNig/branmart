import React from "react";
import style from "./AllCss.module.css";
import footerLogo from '../assets/Vector.png'

const Footer = () => {
  return (
    <>
      <footer className={`${style.footer} fade-up`}>
        <div className={`${style["footer-container"]} row`}>
          {/* <!-- LEFT BRAND --> */}
          <div className={`${style["footer-brand"]} col-md-5`}>
            <img src={footerLogo} className="img-fluid" alt="Footer Logo" />
            {/* <!-- <h2 className="footer-logo">Branmart</h2> --> */}
            <p>
              Design amazing digital experiences that
              <br />
              create more happy in the world.
            </p>
          </div>

          {/* <!-- FOOTER LINKS --> */}
          <div className={`${style["footer-links"]}  col-md-7`}>
            <div className={`${style["footer-column"]}`}>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Templates</a>
              <a href="#">Pricing</a>
            </div>

            <div className={`${style["footer-column"]}`}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>

            <div className={`${style["footer-column"]}`}>
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Tutorials</a>
              <a href="#">Help centre</a>
              <a href="#">FAQs</a>
            </div>

            <div className={`${style["footer-column"]}`}>
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
              <a href="#">Licenses</a>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-5">
          <p className={`${style.copyright} col-md-7 mx-auto`}>
            © 2025 Branmart. All rights reserved.
          </p>
          {/* <!-- SOCIAL ICONS --> */}
          <div className={`${style["footer-social "]} col-md-5 mx-auto`}>
            <i className={`bi bi-twitter-x ${style["social-icon"]} mx-3`}></i>
            <i className={`bi bi-linkedin ${style["social-icon"]} mx-3`}></i>
            <i className={`bi bi-facebook ${style["social-icon"]} mx-3`}></i>
            <i className={`bi bi-github ${style["social-icon"]} mx-3`}></i>
            <i className={`bi bi-peace ${style["social-icon"]} mx-3`}></i>
            <i className={`bi bi-dribbble ${style["social-icon"]} mx-3`}></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
