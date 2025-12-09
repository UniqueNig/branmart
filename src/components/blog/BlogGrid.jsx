import React, { useState } from "react";
import style from "./blog.module.css";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import { Link } from "react-router-dom";

const BlogGrid = () => {
  const categories = [
    "All",
    "E-commerce",
    "Website Design",
    "Marketing",
    "Business Growth",
    "Product Updates",
  ];

  const blogs = [
    {
      id: 1,
      title: "How to Build an Online Store That Sells",
      category: "E-commerce",
      date: "October 10, 2025",
      image: blog1,
      excerpt:
        "Learn key steps to create a professional online store, from product setup to payment integration.",
    },
    {
      id: 2,
      title: "7 Website Design Mistakes That Hurt Conversions",
      category: "Website Design",
      date: "October 28, 2025",
      image: blog2,
      excerpt:
        "Poor layout and unclear navigation drive visitors away. Here's how to design pages that convert.",
    },
    {
      id: 3,
      title: "Boost Your Sales with Better Product Photos",
      category: "Marketing",
      date: "November 2, 2025",
      image: blog3,
      excerpt:
        "Clean and consistent product images boost trust and sales. Here are simple tips.",
    },
    {
      id: 4,
      title: "How to Choose the Right Template for Your Brand",
      category: "Website Design",
      date: "November 5, 2025",
      image: blog4,
      excerpt:
        "Your template sets the tone for your brand. Learn how to pick one that reflects your business.",
    },
    {
      id: 5,
      title: "How to Build an Online Store That Sells",
      category: "E-commerce",
      date: "October 10, 2025",
      image: blog1,
      excerpt:
        "Learn key steps to create a professional online store, from product setup to payment integration.",
    },
    {
      id: 6,
      title: "7 Website Design Mistakes That Hurt Conversions",
      category: "Website Design",
      date: "October 28, 2025",
      image: blog2,
      excerpt:
        "Poor layout and unclear navigation drive visitors away. Here's how to design pages that convert.",
    },
    {
      id: 7,
      title: "Boost Your Sales with Better Product Photos",
      category: "Marketing",
      date: "November 2, 2025",
      image: blog3,
      excerpt:
        "Clean and consistent product images boost trust and sales. Here are simple tips.",
    },
    {
      id: 8,
      title: "How to Choose the Right Template for Your Brand",
      category: "Website Design",
      date: "November 5, 2025",
      image: blog4,
      excerpt:
        "Your template sets the tone for your brand. Learn how to pick one that reflects your business.",
    },
    {
      id: 9,
      title: "How to Build an Online Store That Sells",
      category: "E-commerce",
      date: "October 10, 2025",
      image: blog1,
      excerpt:
        "Learn key steps to create a professional online store, from product setup to payment integration.",
    },
    {
      id: 10,
      title: "7 Website Design Mistakes That Hurt Conversions",
      category: "Website Design",
      date: "October 28, 2025",
      image: blog2,
      excerpt:
        "Poor layout and unclear navigation drive visitors away. Here's how to design pages that convert.",
    },
    {
      id: 11,
      title: "Boost Your Sales with Better Product Photos",
      category: "Marketing",
      date: "November 2, 2025",
      image: blog3,
      excerpt:
        "Clean and consistent product images boost trust and sales. Here are simple tips.",
    },
    {
      id: 12,
      title: "How to Choose the Right Template for Your Brand",
      category: "Website Design",
      date: "November 5, 2025",
      image: blog4,
      excerpt:
        "Your template sets the tone for your brand. Learn how to pick one that reflects your business.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 SEARCH + CATEGORY FILTER
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <>
      <div className="container">
        {/* 🔍 Search bar */}
        <div className="d-flex justify-content-center mb-4">
          <div className="input-group w-50">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(2);
              }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn px-3 py-1 rounded-pill ${
                activeCategory === cat
                  ? style.activeFilter
                  : style.inactiveFilter
              }`}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(2);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="container row g-4">
          {visibleBlogs.map((blog, index) => (
            <div key={blog.id} className="col-md-6">
              <div
                className={`p-3 rounded shadow-sm ${style.blogCard} ${style.fadeIn}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={blog.image}
                  className="img-fluid rounded mb-3"
                  alt={blog.title}
                />

                <div className="d-flex justify-content-between mb-2">
                  <span className={style.categoryTag}>{blog.category}</span>
                  <small className={style.catDate}>{blog.date}</small>
                </div>

                <h5 className={style.blogTitle}>{blog.title}</h5>
                <p className={`${style.catDate} mb-3`}>{blog.excerpt}</p>

                <Link to={"/blog-details"}>
                  <button className={`btn p-0 text-start ${style.readMore}`}>
                    Read more →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredBlogs.length && (
          <div className="text-center mt-5 mb-5">
            <button
              className={`btn px-4 py-2 rounded-pill ${style.loadMoreBtn}`}
              onClick={() => setVisibleCount(visibleCount + 2)}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogGrid;
