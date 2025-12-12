import React, { useState } from "react";
import style from "./salesrevenue.module.css";

const SalesRevenue = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [hoverIndex, setHoverIndex] = useState(null);

  /* ----------------------------
     Monthly dataset (example)
  ----------------------------- */
  const monthlyData = [
    { month: "Jan", value: 50000 },
    { month: "Feb", value: 60000 },
    { month: "Mar", value: 75000 },
    { month: "Apr", value: 100000 },
    { month: "May", value: 95000 },
    { month: "Jun", value: 50000, highlight: true },
    { month: "Jul", value: 80000 },
    { month: "Aug", value: 105000 },
    { month: "Sep", value: 90000 },
    { month: "Oct", value: 110000 },
    { month: "Nov", value: 85000 },
    { month: "Dec", value: 65000 },
  ];

  /* ----------------------------
     Category donut chart data
  ----------------------------- */
  const categoryData = [
    { label: "Electronics", value: 85000, percent: 60, color: "#FF5722" },
    { label: "Fashion", value: 20000, percent: 20, color: "#E91E63" },
    { label: "Home & living", value: 15000, percent: 15, color: "#7C4DFF" },
    { label: "Health & Wellness", value: 5000, percent: 5, color: "#FFC107" },
  ];

  const totalSales = categoryData.reduce((acc, x) => acc + x.value, 0);
  const maxValue = Math.max(...monthlyData.map((x) => x.value));

  return (
    <section className="container mt-4">

      {/* ================================
          ROW WRAPPER
      ================================= */}
      <div className="row g-4">

        {/* ================================
            SALES REVENUE CHART
        ================================= */}
        <div className="col-xl-8">
          <div className={style.cardBox}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-bar-chart-line"></i>
                <h5 className={style.cardTitle}>Sales Revenue</h5>
              </div>

              {/* Tabs */}
              <div className={style.tabs}>
                {["monthly", "quarterly", "yearly"].map((tab) => (
                  <button
                    key={tab}
                    className={`${style.tabBtn} ${
                      activeTab === tab ? style.active : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Bar Chart */}
            <div className={style.chartArea}>
              {monthlyData.map((item, i) => {
                const barHeight = (item.value / maxValue) * 100;

                return (
                  <div key={i} className={style.chartColumn}>
                    <div
                      className={`${style.bar} ${
                        item.highlight ? style.highlightBar : ""
                      }`}
                      style={{ height: `${barHeight}%` }}
                      onMouseEnter={() => setHoverIndex(i)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      {/* Tooltip */}
                      {hoverIndex === i && (
                        <div className={style.tooltipBox}>
                          <strong>{item.month} 2025</strong>
                          <p>${item.value.toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                    <p className={style.monthLabel}>{item.month}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================================
            TOP CATEGORIES PIE/DONUT CHART
        ================================= */}
        <div className="col-xl-4">
          <div className={style.cardBox}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-stack"></i>
                <h5 className={style.cardTitle}>Top Categories</h5>
              </div>

              <button className={style.viewAllBtn}>View all</button>
            </div>

            {/* Donut Chart */}
            <div className={style.donutWrapper}>
              <svg width="180" height="180" viewBox="0 0 42 42">
                <circle
                  className={style.donutRing}
                  cx="21"
                  cy="21"
                  r="15.915"
                  strokeWidth="6"
                />

                {/* Segments */}
                {categoryData.reduce((acc, item, idx) => {
                  const prevPercent = acc.total;
                  const dash = (item.percent / 100) * 100;
                  const gap = 0.5;

                  acc.total += item.percent;

                  acc.elements.push(
                    <circle
                      key={idx}
                      className={style.donutSegment}
                      cx="21"
                      cy="21"
                      r="15.915"
                      strokeWidth="6"
                      stroke={item.color}
                      strokeDasharray={`${dash} ${100 - dash}`}
                      strokeDashoffset={-prevPercent}
                    />
                  );

                  return acc;
                }, { total: 0, elements: [] }).elements}
              </svg>

              <div className={style.donutCenter}>
                <p className={style.centerLabel}>Total Sales</p>
                <h4 className={style.centerValue}>
                  ${totalSales.toLocaleString()}
                </h4>
              </div>
            </div>

            {/* Category Legend */}
            <div className="mt-4">
              {categoryData.map((item, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className={style.colorDot}
                      style={{ background: item.color }}
                    ></span>
                    <span className={style.legendLabel}>{item.label}</span>
                  </div>

                  <span className={style.legendValue}>
                    ${item.value.toLocaleString()} {item.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesRevenue;
