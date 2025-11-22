import React from "react";
import style from "../AllCss.module.css";

const WhyChoose = () => {
  return (
    <section className={`container ${style.sectionWhy}`}>
      <div className="row g-5 align-items-start">

        {/* LEFT TEXT BLOCK */}
        <div className="col-lg-6">
          <div className={style.leftBox}>
            <h2 className={style.titleWhy}>WHY CHOOSE BRAMMART <br /> TEMPLATES</h2>
            <p className={style.subtitleWhy}>
              Every Brammart template is built for performance, flexibility, and <br />
              ease.
            </p>
          </div>
        </div>

        {/* RIGHT LIST BLOCK */}
        <div className="col-lg-6">
          <div className={style.rightBox}>
            <ul className={style.listWhy}>
              <li>Professionally designed layouts for all industries</li>
              <li>Fully responsive on any device</li>
              <li>Drag-and-drop editing</li>
              <li>SEO and speed optimized</li>
              <li>Built-in integrations and e-commerce features</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
