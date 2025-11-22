import React from "react";
import style from "../AllCss.module.css";
import fastImg from '../../assets/Fastgirl.png'


const FastReliable = () => {
  return (
    <>
      <section className={`container ${style.sectionWrapperReach}`}>
        <div className="row align-items-center g-4">
          {/* RIGHT IMAGE SECTION */}
          <div className="col-lg-6">
            <div className={style.imageWrapperReach}>
              <img
                src={fastImg}
                alt="Customer Image"
                className="img-fluid w-75"
              />
            </div>
          </div>

          {/* LEFT TEXT SECTION */}
          <div className="col-lg-6">
            <div className={style.textBoxReach}>
              <h2 className={style.titleReach}>
                FAST, RELIABLE, AND SECURE
              </h2>

              <p className={style.subtitleReach}>
              Your website stays safe and performs at its best every <br /> time.
              </p>

              <ul className={`${style.featureListReach} mt-5`}>
                <li className={style.subtitleReach}>
                  <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                  SSL encryption for all websites.
                </li>
                <li className={style.subtitleReach}>
                  <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                  Automatic backups and updates.
                </li>
                <li className={style.subtitleReach}>
                  <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                  High-speed cloud hosting.
                </li>
                <li className={style.subtitleReach}>
                  <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                  Secure checkout and data protection.
                </li>
                <li className={style.subtitleReach}>
                  <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                 99.9% uptime guarantee.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FastReliable;
