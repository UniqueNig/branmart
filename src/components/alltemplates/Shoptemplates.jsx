import React, { useMemo, useState } from "react";
import style from "../AllCss.module.css";

import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import image12 from "../../assets/image 12.png";
import { Link } from "react-router-dom";

/**
 * Shoptemplates (Option C)
 * - Category & Price filters
 * - Sorting
 * - Pagination (page numbers)
 * - Load More (advances to next page)
 *
 * Notes:
 * - Page size is configurable via PAGE_SIZE
 * - Filtering resets to page 1
 * - "Load More" will jump to the next page until last page
 */

const PAGE_SIZE = 30; // items per page (adjust as needed)

const allCategories = [
  "Online Stores",
  "Restaurants",
  "Real Estates",
  "Consulting & Agencies",
  "Education",
  "Health & Fitness",
  "Events & Bookings",
  "Portfolio & Personal",
  "Technology & SaaS",
];

const Shoptemplates = () => {
  // ======================================
  // TEMPLATE DATA (you can expand this)
  // NOTE: add `category` and `createdAt`/`popularity` fields as needed
  // ======================================
  const templates = [
    {
      img: image12,
      name: "Flone",
      badge: "Free",
      category: "Online Stores",
      createdAt: "2024-12-01",
      popularity: 80,
    },
    {
      img: image9,
      name: "Phlox",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-10-12",
      popularity: 120,
    },
    {
      img: image10,
      name: "Mixtas",
      badge: "Premium",
      category: "Portfolio & Personal",
      createdAt: "2024-09-22",
      popularity: 60,
    },
    {
      img: image10,
      name: "Flone (Alt)",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-08-16",
      popularity: 45,
    },
    {
      img: image9,
      name: "Phlox (Alt)",
      badge: "Premium",
      category: "Technology & SaaS",
      createdAt: "2024-07-05",
      popularity: 72,
    },
    {
      img: image12,
      name: "Mixtas (Alt)",
      badge: "Free",
      category: "Portfolio & Personal",
      createdAt: "2024-06-11",
      popularity: 34,
    },

    // --- duplicated to demonstrate pagination; expand to real dataset as needed
    {
      img: image12,
      name: "Flone 2",
      badge: "Free",
      category: "Online Stores",
      createdAt: "2024-05-01",
      popularity: 26,
    },
    {
      img: image9,
      name: "Phlox 2",
      badge: "Premium",
      category: "Restaurants",
      createdAt: "2024-04-12",
      popularity: 45,
    },
    {
      img: image10,
      name: "Mixtas 2",
      badge: "Premium",
      category: "Real Estates",
      createdAt: "2024-03-22",
      popularity: 53,
    },
    {
      img: image10,
      name: "Flone 3",
      badge: "Premium",
      category: "Consulting & Agencies",
      createdAt: "2024-02-16",
      popularity: 90,
    },
    {
      img: image9,
      name: "Phlox 3",
      badge: "Premium",
      category: "Education",
      createdAt: "2024-01-05",
      popularity: 15,
    },
    {
      img: image10,
      name: "Mixtas 2",
      badge: "Premium",
      category: "Real Estates",
      createdAt: "2024-03-22",
      popularity: 53,
    },
    {
      img: image12,
      name: "Mixtas 3",
      badge: "Free",
      category: "Health & Fitness",
      createdAt: "2023-11-11",
      popularity: 11,
    },
    {
      img: image9,
      name: "Phlox 3",
      badge: "Premium",
      category: "Education",
      createdAt: "2024-01-05",
      popularity: 15,
    },
    {
      img: image12,
      name: "Flone",
      badge: "Free",
      category: "Online Stores",
      createdAt: "2024-12-01",
      popularity: 80,
    },
    {
      img: image9,
      name: "Phlox",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-10-12",
      popularity: 120,
    },
    {
      img: image10,
      name: "Mixtas",
      badge: "Premium",
      category: "Portfolio & Personal",
      createdAt: "2024-09-22",
      popularity: 60,
    },
    {
      img: image10,
      name: "Flone (Alt)",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-08-16",
      popularity: 45,
    },
    {
      img: image9,
      name: "Phlox (Alt)",
      badge: "Premium",
      category: "Technology & SaaS",
      createdAt: "2024-07-05",
      popularity: 72,
    },
    {
      img: image12,
      name: "Mixtas (Alt)",
      badge: "Free",
      category: "Portfolio & Personal",
      createdAt: "2024-06-11",
      popularity: 34,
    },
    {
      img: image12,
      name: "Flone",
      badge: "Free",
      category: "Online Stores",
      createdAt: "2024-12-01",
      popularity: 80,
    },
    {
      img: image9,
      name: "Phlox",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-10-12",
      popularity: 120,
    },
    {
      img: image10,
      name: "Mixtas",
      badge: "Premium",
      category: "Portfolio & Personal",
      createdAt: "2024-09-22",
      popularity: 60,
    },
    {
      img: image10,
      name: "Flone (Alt)",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-08-16",
      popularity: 45,
    },
    {
      img: image9,
      name: "Phlox (Alt)",
      badge: "Premium",
      category: "Technology & SaaS",
      createdAt: "2024-07-05",
      popularity: 72,
    },
    {
      img: image12,
      name: "Mixtas (Alt)",
      badge: "Free",
      category: "Portfolio & Personal",
      createdAt: "2024-06-11",
      popularity: 34,
    },
    {
      img: image12,
      name: "Flone",
      badge: "Free",
      category: "Online Stores",
      createdAt: "2024-12-01",
      popularity: 80,
    },
    {
      img: image9,
      name: "Phlox",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-10-12",
      popularity: 120,
    },
    {
      img: image10,
      name: "Mixtas",
      badge: "Premium",
      category: "Portfolio & Personal",
      createdAt: "2024-09-22",
      popularity: 60,
    },
    {
      img: image10,
      name: "Flone (Alt)",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-08-16",
      popularity: 45,
    },
    {
      img: image9,
      name: "Phlox (Alt)",
      badge: "Premium",
      category: "Technology & SaaS",
      createdAt: "2024-07-05",
      popularity: 72,
    },
    {
      img: image12,
      name: "Mixtas (Alt)",
      badge: "Free",
      category: "Portfolio & Personal",
      createdAt: "2024-06-11",
      popularity: 34,
    },
    {
      img: image12,
      name: "Flone",
      badge: "Free",
      category: "Online Stores",
      createdAt: "2024-12-01",
      popularity: 80,
    },
    {
      img: image9,
      name: "Phlox",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-10-12",
      popularity: 120,
    },
    {
      img: image10,
      name: "Mixtas",
      badge: "Premium",
      category: "Portfolio & Personal",
      createdAt: "2024-09-22",
      popularity: 60,
    },
    {
      img: image10,
      name: "Flone (Alt)",
      badge: "Premium",
      category: "Online Stores",
      createdAt: "2024-08-16",
      popularity: 45,
    },
    {
      img: image9,
      name: "Phlox (Alt)",
      badge: "Premium",
      category: "Technology & SaaS",
      createdAt: "2024-07-05",
      popularity: 72,
    },
    {
      img: image12,
      name: "Mixtas (Alt)",
      badge: "Free",
      category: "Portfolio & Personal",
      createdAt: "2024-06-11",
      popularity: 34,
    },
  ];

  // UI state
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]); // 'Free' | 'Premium'
  const [sortBy, setSortBy] = useState("Newest"); // Newest | Oldest | Popular
  const [currentPage, setCurrentPage] = useState(1);

  // Helper toggles
  const toggleCategory = (cat) => {
    setCurrentPage(1); // reset page
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (price) => {
    setCurrentPage(1); // reset page
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filter + sort computed list
  const filteredAndSorted = useMemo(() => {
    let list = [...templates];

    // Filter by price (badge)
    if (selectedPrices.length) {
      list = list.filter((t) => selectedPrices.includes(t.badge));
    }

    // Filter by category
    if (selectedCategories.length) {
      list = list.filter((t) => selectedCategories.includes(t.category));
    }

    // Sort
    if (sortBy === "Newest") {
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "Oldest") {
      list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "Popular") {
      list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    return list;
  }, [templates, selectedPrices, selectedCategories, sortBy]);

  // Pagination calculations
  const totalItems = filteredAndSorted.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

  // Ensure currentPage is valid when filters change
  if (currentPage > totalPages) {
    setCurrentPage(1);
  }

  const pageStartIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleTemplates = filteredAndSorted.slice(0, currentPage * PAGE_SIZE); // for "Load More" behavior combined with pages
  // For strict page-by-page (displaying only page N), you'd slice(pageStartIndex, pageStartIndex + PAGE_SIZE)

  // Generate page number list (simple logic)
  const getPageNumbers = () => {
    const pages = [];
    const maxButtons = 7; // show up to 7 page buttons with ellipses if needed

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // if many pages, show [1,2,3,...,last-1,last] with current in middle
    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1);
    if (left > 2) pages.push("start-ellipsis");

    for (let i = left; i <= right; i++) pages.push(i);

    if (right < totalPages - 1) pages.push("end-ellipsis");
    pages.push(totalPages);
    return pages;
  };

  const pageNumbers = getPageNumbers();

  // Handlers
  const goToPage = (p) => {
    if (p === "start-ellipsis" || p === "end-ellipsis") return;
    setCurrentPage(p);
    // If user navigates to a page, we want to show up to that page with Load More semantics:
    // (i.e., visibleTemplates shown = p * PAGE_SIZE)
    // Our visibleTemplates derived from currentPage handles this
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handleLoadMore = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {/* LEFT SIDEBAR FILTERS */}
          <div className="col-md-3 g-4">
            {/* PRICE */}
            <div className="mb-4">
              <h6 className={`${style.shopSemibold} mb-2`}>Price</h6>

              <div className="form-check mb-3">
                <input
                  id="price-free"
                  className="form-check-input me-3"
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid #D5D7DA",
                    borderRadius: "6px",
                  }}
                  type="checkbox"
                  checked={selectedPrices.includes("Free")}
                  onChange={() => togglePrice("Free")}
                />
                <label
                  className={`${style.shopLabel} form-check-label`}
                  htmlFor="price-free"
                >
                  Free
                </label>
              </div>

              <div className="form-check mb-3">
                <input
                  id="price-premium"
                  className="form-check-input me-3"
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid #D5D7DA",
                    borderRadius: "6px",
                  }}
                  type="checkbox"
                  checked={selectedPrices.includes("Premium")}
                  onChange={() => togglePrice("Premium")}
                />
                <label
                  className={`${style.shopLabel} form-check-label`}
                  htmlFor="price-premium"
                >
                  Premium
                </label>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="mb-4 ">
              <h6 className={`${style.shopSemibold} mb-2`}>Category</h6>

              {allCategories.map((cat, i) => (
                <div className="form-check mb-3" key={i}>
                  <input
                    id={`cat-${i}`}
                    className="form-check-input me-3"
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "1px solid #D5D7DA",
                      borderRadius: "6px",
                    }}
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <label
                    className={`${style.shopLabel} form-check-label`}
                    htmlFor={`cat-${i}`}
                  >
                    {cat}
                  </label>
                </div>
              ))}

              {/* Quick actions */}
              <div className="mt-3 d-flex gap-2">
                <button
                  className={`${style["btn-primary-custom"]} btn`}
                  onClick={() => {
                    setSelectedCategories([]);
                    setCurrentPage(1);
                  }}
                >
                  Clear
                </button>
                <button
                  className={`${style["btn-outline-custom"]} btn`}
                  onClick={() => {
                    setSelectedCategories([...allCategories]);
                    setCurrentPage(1);
                  }}
                >
                  Select all
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: GRID + SORT */}
          <div className="col-md-9">
            {/* SORT + COUNT */}
            <div
              className={`${style.shopLabel} d-flex justify-content-between align-items-center mb-4 controls-row`}
            >
              <p className="mb-0 fw-semibold">
                {totalItems === 0
                  ? "0 Templates"
                  : `${(currentPage - 1) * PAGE_SIZE + 1} – ${Math.min(
                      currentPage * PAGE_SIZE,
                      totalItems
                    )} of ${totalItems} Templates`}
              </p>

              <div className="d-flex align-items-center gap-2">
                <span className={style.shopLabel}>Sort by:</span>
                <select
                  className={`${style.shopLabel} form-select form-select-sm w-auto`}
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option className={style.shopLabel}>Newest</option>
                  <option className={style.shopLabel}>Oldest</option>
                  <option className={style.shopLabel}>Popular</option>
                </select>
              </div>
            </div>

            {/* TEMPLATES GRID */}
            <div className="row g-4">
              {visibleTemplates.length === 0 ? (
                <div className="col-12">
                  <div className="p-4 text-center text-muted">
                    No templates match your filters.
                  </div>
                </div>
              ) : (
                visibleTemplates
                  .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE) // show only items for the current page
                  .map((item, index) => (
                    <div className="col-md-4" key={`${item.name}-${index}`}>
                      <div
                        className={`${style["template-card"]} position-relative`}
                      >
                        {/* IMAGE */}
                        <img
                          src={item.img}
                          className="img-fluid rounded w-100"
                          alt={item.name}
                        />

                        {/* HOVER OVERLAY */}
                        <div
                          className={`${style.overlay} d-flex flex-column justify-content-center align-items-center`}
                        >
                          <Link
                            to={"/store-setup/theme-chosen"}
                            className={`btn ${style["btn-orange"]} mb-2`}
                          >
                            Use template
                          </Link>
                          <Link
                            className={style["preview-link"]}
                            to={"/template-details"}
                          >
                            {" "}
                            Preview ↗
                          </Link>
                        </div>

                        {/* NAME + BADGE */}
                        <div className="mt-2 d-flex justify-content-between align-items-center">
                          <span className="fw-semibold">{item.name}</span>
                          <span className="badge bg-light text-dark border">
                            {item.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>

            {/* CONTROLS: PREV | PAGE NUMBERS | NEXT + LOAD MORE */}
            <div className="d-flex justify-content-between align-items-center mt-5">
              {/* PREVIOUS */}
              <button
                className={`${style["btn-primary-custom"]} btn  d-flex align-items-center gap-2`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                <i className="bi bi-arrow-left"></i> Previous
              </button>

              {/* PAGE NUMBERS */}
              <div className="d-flex gap-2 align-items-center">
                {pageNumbers.map((num, idx) => {
                  if (num === "start-ellipsis" || num === "end-ellipsis") {
                    return (
                      <span key={idx} className="px-2 text-muted">
                        ...
                      </span>
                    );
                  }
                  return (
                    <button
                      key={num}
                      className={`btn  ${
                        num === currentPage ? style["active-page"] : "btn-light"
                      }`}
                      onClick={() => goToPage(num)}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              {/* NEXT & LOAD MORE */}
              <div className="d-flex gap-2">
                <button
                  className={`${style["btn-primary-custom"]} btn  d-flex align-items-center gap-2`}
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next <i className="bi bi-arrow-right"></i>
                </button>

                {/* Load more: advances to next page until last */}
                <button
                  className={`${style["btn-outline-custom"]} btn `}
                  onClick={handleLoadMore}
                  disabled={currentPage === totalPages}
                >
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shoptemplates;
