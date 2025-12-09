import React from "react";
import style from "./helpcentre.module.css";

const PopularArticle = () => {
  const articles = [
    "How to Publish Your Website",
    "How to Connect a Custom Domain",
    "Setting Up Online Payments",
    "Managing Product Inventory",
    "Resetting Your Account Password",
    "Understanding Your Sales Dashboard",
    "Setting Up Online Payments",
    "Managing Product Inventory",
  ];

  return (
    <section className={`container mb-5 ${style.popularArticles}`}>
      <div className="row mb-4">
        <div className="col-12">
          <h2 className={style.title}>POPULAR ARTICLES</h2>
          <p className={style.subtitle}>
            Most searched and helpful resources chosen by our users.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {articles.map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
            <div className={`shadow ${style.articleCard}`}>
              <div
                className={`d-flex align-items-center justify-content-center ${style.iconWrapper}`}
              >
                <i className={`bi bi-square ${style.icon}`} />
              </div>
              <p className={style.cardText}>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularArticle;
