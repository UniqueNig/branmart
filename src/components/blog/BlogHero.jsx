import React from "react";
import style from "./blog.module.css";

const BlogHero = () => {
  return (
    <>
      <div className="container text-center py-5">
        {/* Top Label */}
        <p className={`${style.topLabel} mb-2`}>Blog</p>

        {/* Main Heading */}
        <h1 className={`${style.mainHeading} fw-bold mb-3`}>
          INSIGHTS, TIPS, AND STORIES <br />
          FOR ONLINE GROWTH
        </h1>

        {/* Subtitle */}
        <p className={`${style.subText} mx-auto`} style={{ maxWidth: "650px" }}>
          Learn how to build, manage, and scale your business with expert advice
          from the Branmart team.
        </p>
      </div>
    </>
  );
};

export default BlogHero;
