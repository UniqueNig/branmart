import React, { useState } from "react";
import style from "./salesrevenue.module.css";

const SalesRevenue = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [hoverIndex, setHoverIndex] = useState(null);

  /* ----------------------------
     Monthly dataset (example)
  ----------------------------- */
  const monthlyData = [
    { label: "Jan", value: 50000 },
    { label: "Feb", value: 60000 },
    { label: "Mar", value: 75000 },
    { label: "Apr", value: 100000 },
    { label: "May", value: 95000 },
    { label: "Jun", value: 95000, highlight: true },
    { label: "Jul", value: 80000 },
    { label: "Aug", value: 105000 },
    { label: "Sep", value: 90000 },
    { label: "Oct", value: 110000 },
    { label: "Nov", value: 85000 },
    { label: "Dec", value: 65000 },
  ];

  const quarterlyData = [
    { label: "Q1", value: 185000 },
    { label: "Q2", value: 245000, highlight: true },
    { label: "Q3", value: 275000 },
    { label: "Q4", value: 260000 },
  ];

  const yearlyData = [
    { label: "2021", value: 820000 },
    { label: "2022", value: 960000 },
    { label: "2023", value: 1100000, highlight: true },
    { label: "2024", value: 1250000 },
  ];

  let chartData = [];

  if (activeTab === "monthly") {
    chartData = monthlyData;
  } else if (activeTab === "quarterly") {
    chartData = quarterlyData;
  } else {
    chartData = yearlyData;
  }

  /* ----------------------------
     Category donut chart data
  ----------------------------- */
  const categoryData = [
    { label: "Electronics", value: 85000, percent: 60, color: "#FF4F00" },
    { label: "Fashion", value: 20000, percent: 20, color: "#EE46BC" },
    { label: "Home & living", value: 15000, percent: 15, color: "#7A5AF8" },
    { label: "Health & Wellness", value: 5000, percent: 5, color: "#F79009" },
  ];

  const totalSales = categoryData.reduce((acc, x) => acc + x.value, 0);
  const maxValue = Math.max(...chartData.map((x) => x.value));

  return (
    <section className="container">
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
                <i
                  className="bi bi-bar-chart-line"
                  style={{ color: "#CC3602" }}
                ></i>
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
              {chartData.map((item, i) => {
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
                      {hoverIndex === i && (
                        <div className={style.tooltipBox}>
                          <strong className={style.cardTitle}>
                            {item.label}
                          </strong>
                          <p>${item.value.toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                    <p className={style.monthLabel}>{item.label}</p>
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
                <i className="bi bi-stack" style={{ color: "#CC3602" }}></i>
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
                {
                  categoryData.reduce(
                    (acc, item, idx) => {
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
                    },
                    { total: 0, elements: [] }
                  ).elements
                }
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

                  <span>
                    <div className="d-flex  align-items-center gap-1">
                      <p  className={style.legendValue}>${item.value.toLocaleString()}{" "}</p>
                      <p className={style.percent}>{item.percent}%</p>
                    </div>
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
