import React from "react";
import style from "../AllCss.module.css";

// Assets
import person1 from "../../assets/ada.png";
import template1 from "../../assets/image 12.png";
import person2 from "../../assets/fat.png";
import person3 from "../../assets/mic.png";
import template2 from "../../assets/image 10.png";
import template3 from "../../assets/image 9.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialReviews = () => {
  const reviews = [
    {
      text: `The theme is easily customised with clean and stylish sections that work great on 
      both mobile and desktop.`,
      name: "Adaeze O.",
      role: "Fashion & Accessories",
      avatar: person1,
      templateImg: template1,
      templateName: "Fashion Store",
    },
    {
      text: `The theme is easily customised with clean 
      and stylish sections that work great on 
      both mobile and desktop.`,
      name: "Adaeze O.",
      role: "Fashion & Accessories",
      avatar: person2,
      templateImg: template2,
      templateName: "Fashion Store",
    },
    {
      text: `The theme is easily customised with clean 
      and stylish sections that work great on 
      both mobile and desktop.`,
      name: "Adaeze O.",
      role: "Fashion & Accessories",
      avatar: person3,
      templateImg: template3,
      templateName: "Electronics Store",
    },
    // Add more reviews to enable sliding
  ];

  return (
    <section className={`${style.testimonialSection} py-5`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className={`${style.sectionLabel} mb-4`}>Testimonials</p>
          </div>
          <div className="col-md-9">
            {/* SWIPER */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ el: ".custom-pagination", clickable: true }}
              autoplay={{ delay: 4500 }}
              spaceBetween={50}
              loop={true}
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="row align-items-center mb-5">
                    {/* LEFT SIDE */}
                    <div className="col-lg-7">
                      <p className={`${style.reviewTitle} mb-4`}>
                        {item.text}
                      </p>

                      {/* User Info */}
                      <div className="d-flex align-items-center mb-5">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className={`${style.userImg} rounded-circle me-3`}
                        />
                        <div>
                          <h6 className={`${style.userName} mb-0`}>
                            {item.name}
                          </h6>
                          <p className={`${style.userRole} mb-0`}>
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Custom Arrows connected to Swiper */}
                      <div className="d-flex gap-3">
                        <button
                          className={`${style.arrowBtn} btn rounded-circle custom-prev`}
                        >
                          <i className="bi bi-chevron-left"></i>
                        </button>

                        <button
                          className={`${style.arrowBtn} btn rounded-circle custom-next`}
                        >
                          <i className="bi bi-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-5 text-center text-lg-end mt-5 mt-lg-0">
                      <img
                        src={item.templateImg}
                        alt={item.templateName}
                        className="img-fluid rounded"
                      />

                      <div className="mt-3 text-center">
                        <h6 className={style.templateName}>
                          {item.templateName}
                        </h6>
                        <a href="#" className={style.viewTemplateLink}>
                          View template{" "}
                          <i className="bi bi-arrow-up-right "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Pagination Dots */}
              <div className="custom-pagination mt-4"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialReviews;
