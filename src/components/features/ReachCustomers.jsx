import React from "react";
import style from "../AllCss.module.css";
import reachImg from "../../assets/reachimg.png";

const ReachCustomers = () => {
  return (
    <section className={`container ${style.sectionWrapperReach}`}>
      <div className="row align-items-center g-4">
        {/* RIGHT IMAGE SECTION */}

        <div className="col-lg-6">
          <div className={style.textBoxReach}>
            <h2 className={style.titleReach}>
              REACH MORE CUSTOMERS AND <br /> GROW YOUR BRAND
            </h2>

            <p className={style.subtitleReach}>
              Built-in marketing tools help you attract visitors and <br />{" "}
              increase sales.
            </p>

            <ul className={`${style.featureListReach} mt-5`}>
              <li className={style.subtitleReach}>
                <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                Built-in blog for content marketing.
              </li>
              <li className={style.subtitleReach}>
                <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                Email marketing integrations.
              </li>
              <li className={style.subtitleReach}>
                <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                SEO optimization for all pages and products.
              </li>
              <li className={style.subtitleReach}>
                <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                Social media linking and sharing tools.
              </li>
              <li className={style.subtitleReach}>
                <i className={`bi bi-check-circle ${style.iconReach}`}></i>
                Google Analytics and Meta Pixel support.
              </li>
            </ul>
          </div>
        </div>
        {/* LEFT TEXT SECTION */}

        <div className="col-lg-6">
          <div className={style.imageWrapperReach}>
            <img
              src={reachImg}
              alt="Customer Image"
              className="img-fluid w-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachCustomers;
