import React from "react";
import style from "./blogdetails.module.css"; // your custom styles
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import { Link } from "react-router-dom";

const RelatedNews = () => {
  return (
    <section className={`container my-5 mb-5 ${style.relatedSection}`}>
      <h3 className={`${style.RelatedNews} mb-4`}>Related News</h3>

      <div className="row g-4 mt-5 mb-5">
        {/* CARD 1 */}
        <div className="col-lg-4 col-md-6">
          <div className={`card h-100 p-2 ${style.newsCard}`}>
            <img src={blog1} className="card-img-top rounded" alt="News" />

            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span className={style.badge}>E-commerce</span>
                <small className={style.date}>October 10, 2025</small>
              </div>

              <h5 className={`fw-bold ${style.title}`}>
                How to Build an Online Store That Sells
              </h5>

              <p className={style.description}>
                Learn key steps to create a professional online store, from
                product setup to payment integration.
              </p>

              <Link className={style.readMore} to={"/blog-details"}>
                Read more →
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-lg-4 col-md-6">
          <div className={`card h-100 p-2 ${style.newsCard}`}>
            <img src={blog2} className="card-img-top rounded" alt="News" />

            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span className={style.badge}>Website Design</span>
                <small className={style.date}>October 28, 2025</small>
              </div>

              <h5 className={`fw-bold ${style.title}`}>
                7 Website Design Mistakes That Hurt Conversions
              </h5>

              <p className={style.description}>
                Poor layout and unclear navigation drive visitors away. Learn
                how to design pages that convert.
              </p>

              <Link className={style.readMore} to={"/blog-details"}>
                Read more →
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-lg-4 col-md-6">
          <div className={`card h-100 p-2 ${style.newsCard}`}>
            <img src={blog3} className="card-img-top rounded" alt="News" />

            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span className={style.badge}>E-commerce</span>
                <small className={style.date}>October 10, 2025</small>
              </div>

              <h5 className={`fw-bold ${style.title}`}>
                How to Build an Online Store That Sells
              </h5>

              <p className={style.description}>
                Learn key steps to create a professional online store and start
                selling fast with Branmart.
              </p>

              <Link className={style.readMore} to={"/blog-details"}>
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <hr />
      </div>

      {/* BUTTON */}
      <div className="text-end mb-5">
        <button className={style.viewAllBtn}>View all posts</button>
      </div>

      <div className="container mt-5">
        <hr />
      </div>
    </section>
  );
};

export default RelatedNews;
