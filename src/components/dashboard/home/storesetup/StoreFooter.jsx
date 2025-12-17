import { Copyright } from "lucide-react";
import React from "react";
import style from "./storefooter.module.css";
import { Link } from "react-router-dom";

const StoreFooter = () => {
  return (
    <footer className="py-4 mt-auto">
      <div className="container text-center">
        {/* TOP LINKS */}
        <div className="d-flex justify-content-center gap-4 mb-2 flex-wrap">
          <Link to={""} className={style.footerLink}>
            Terms of Service
          </Link>
          <Link to={""} className={style.footerLink}>
            Privacy Policy
          </Link>
          <Link to={""} className={style.footerLink}>
            Help Centre
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className={`${style.footerText} mb-0`}>
          <Copyright size={14} className="me-1" />
          2025 Branmart Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default StoreFooter;
