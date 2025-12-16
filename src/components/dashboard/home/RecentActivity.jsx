import React from "react";
import style from "./recentactivity.module.css";

const activities = [
  {
    type: "order",
    title: "New order #1082 from Jane Doe for $89.00",
    time: "2 minutes ago",
    icon: "bi-bag",
  },
  {
    type: "user",
    title: "John Smith created a new account.",
    time: "1 hour ago",
    icon: "bi-person-plus",
  },
  {
    type: "alert",
    title: "Low stock alert for “Classic Tee - M”. Only 3 left",
    time: "4 hour ago",
    icon: "bi-exclamation-triangle",
  },
  {
    type: "order",
    title: "New order #1083 from Jane Doe for $89.00",
    time: "2 minutes ago",
    icon: "bi-bag",
  },
];

const RecentActivity = () => {
  return (
    <section className="container mt-4">
      <div className="row g-4">

        {/* =======================
            RECENT ACTIVITIES
        ======================== */}
        <div className="col-xl-8">
          <div className={style.cardBox}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className={style.cardTitle}>Recent Activities</h5>
              <button className={style.viewAll}>View all</button>
            </div>

            <div className="d-flex flex-column gap-3">
              {activities.map((item, index) => (
                <div key={index} className={style.activityItem}>
                  <div className={`${style.iconWrap} ${style[item.type]}`}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <div>
                    <p className={style.activityText}>{item.title}</p>
                    <span className={style.timeText}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =======================
            RIGHT SIDE
        ======================== */}
        <div className="col-xl-4 d-flex flex-column gap-4">

          {/* Tip of the day */}
          <div className={style.cardBox}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className={style.tipIcon}>
                <i className="bi bi-sun"></i>
              </div>
              <h6 className={style.cardTitle}>Tip of the day</h6>
            </div>

            <p className={style.tipText}>
              Improve your SEO by writing detailed and unique product description.
              It helps customers and search engines!
            </p>
          </div>

          {/* Support */}
          <div className={style.cardBox}>
            <h6 className={style.cardTitle}>Support</h6>

            <div className="d-flex flex-column gap-3 mt-3">
              <div className={style.supportItem}>
                <i className="bi bi-book"></i>
                <span>Help Centre</span>
              </div>

              <div className={style.supportItem}>
                <i className="bi bi-headset"></i>
                <span>Contact Support</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
