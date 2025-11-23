import React from "react";
import style from "../AllCss.module.css";
import img1 from '../../assets/mic.png'
import img2 from '../../assets/fat.png'
import img3 from '../../assets/ada.png'

const ReviewTemplateDetail = () => {
  return (
    <section className="py-5 mt-5 text-center" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container">

        {/* HEADINGS */}
        <h2 className={style.defaultHeading}>
          WHAT USERS LOVE ABOUT THIS TEMPLATE
        </h2>
        <p className={`${style.statPara} mb-5`}>
          Hear from business owners who started their stores with Branmart.
        </p>

        {/* BOOTSTRAP SLIDER */}
        <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* SLIDE 1 */}
            <div className="carousel-item active">
              <p className={`${style.reviewText} mx-auto mb-4`} style={{ maxWidth: "780px" }}>
                The theme is easily customised with clean and stylish sections that
                work great on both mobile and desktop.
              </p>

              <img
                src={img1}
                alt="Reviewer"
                className="rounded-circle mb-2"
                width="60"
                height="60"
              />
              <h6 className={`${style.reviewerName} mb-0`}>Adaeze O.</h6>
              <p className={`${style.statPara} mb-4`}>Fashion & Accessories</p>
            </div>

            {/* SLIDE 2 */}
            <div className="carousel-item">
              <p className={`${style.reviewText} mx-auto mb-4`} style={{ maxWidth: "780px" }}>
                Outstanding design quality and superb responsiveness. Perfect for
                modern online stores.
              </p>
              <img
                src={img2}
                alt="Reviewer"
                className="rounded-circle mb-2"
                width="60"
                height="60"
              />
              <h6 className={`${style.reviewerName} mb-0`}>Marcus T.</h6>
              <p className={`${style.statPara} mb-4`}>Electronics Store</p>
            </div>

            {/* SLIDE 3 */}
            <div className="carousel-item">
              <p className={`${style.reviewText} mx-auto mb-4`} style={{ maxWidth: "780px" }}>
                Very clean, easy to customise, and loads extremely fast. Highly recommended!
              </p>
              <img
                src={img3}
                alt="Reviewer"
                className="rounded-circle mb-2"
                width="60"
                height="60"
              />
              <h6 className={`${style.reviewerName} mb-0`}>Sarah P.</h6>
              <p className={`${style.statPara} mb-4`}>Lifestyle Brand</p>
            </div>

          </div>

          {/* LEFT–RIGHT ARROWS */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle p-3"
            ></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle p-3"
            ></span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default ReviewTemplateDetail;
