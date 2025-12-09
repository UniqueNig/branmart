import React from "react";
import style from "./blogdetails.module.css"; // your custom styling
import blogfull1 from "../../assets/blogfull1.png";
import blogfull2 from "../../assets/blogfull2.png";

export const BlogFullDetails = () => {
  return (
    <>
      <div className="container py-5">
        {/* --- TOP TAGS --- */}
        <div
          className={`d-flex col-md-2 align-items-center gap-3 mb-4 ${style.topTags}`}
        >
          <span className={style.categoryTag}>Web Design</span>
          <span className={style.readTime}>8 min read</span>
        </div>

        {/* --- TITLE --- */}
        <h1 className={`${style.titleBlog} mb-3`}>
          7 Website Design Mistakes That Hurt <br /> Conversions
        </h1>

        {/* --- SHORT INTRO TEXT --- */}
        <p className={`${style.description} mb-4`}>
          Poor layout and unclear navigation drive visitors away. Here’s how to
          design pages that <br /> attract and convert more customers.
        </p>

        {/* --- HERO IMAGE --- */}
        <div className="mb-4">
          <img
            src={blogfull1}
            className="img-fluid rounded w-100"
            alt="Blog hero"
          />
        </div>

        {/* --- INFO BAR (AUTHOR + PUBLISH DATE + ICONS) --- */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="d-flex gap-5">
              <div>
                <small className={`${style.Blogy} d-block mb-1`}>
                  Written by
                </small>
                <span className={style.authorName}>Alec Whitten</span>
              </div>

              <div>
                <small className={`${style.Blogy} d-block mb-1`}>
                  Published on
                </small>
                <span className={style.dateB}>17 Jan 2025</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-md-end gap-3 mt-3 mt-md-0">
            <button className={`${style.iconBtnC}`}>
              <i className={`bi bi-clipboard ${style.copy}`}>Copy link</i>
            </button>
            <button className={`${style.iconBtn}`}>
              <i className="bi bi-twitter"></i>
            </button>
            <button className={`${style.iconBtn}`}>
              <i className="bi bi-facebook"></i>
            </button>
            <button className={`${style.iconBtn}`}>
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
        </div>
        {/* --- BLOG CONTENT --- */}

        <div className={`container mt-5 ${style.blogContent}`}>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla.
          </p>
          {/* --- INTRODUCTION HEADING --- */}
          <h4 className={`mb-3 ${style.RelatedNews}`}>Introduction</h4>

          {/* --- BLOG CONTENT PARAGRAPHS --- */}
          <p className={`mb-4 ${style.description}` }>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>

          <p className={`mb-4 ${style.description}` }>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in{" "}
            <a className={style.textLink}>volutpat mollis</a> at volutpat lectus
            velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis
            at habitant diam at. Suscipit{" "}
            <a className={style.textLink}>tristique risus</a>, at donec.
          </p>

          {/* --- INLINE IMAGE --- */}
          <div className="mb-3">
            <img
              src={blogfull2}
              alt="Workspace"
              className="img-fluid rounded w-100"
            />
          </div>

          <small className={`${style.quoteAuthor} d-block mb-5`}>
            Image courtesy of Laura Davidson via Unsplash
          </small>

          {/* --- QUOTE BLOCK --- */}
          <blockquote className={`${style.quoteBox} p-4 mb-5`}>
            <p className={`mb-4 ${style.RelatedNews}` }>
              “In a world older and more complete than ours they move finished
              and complete, gifted with extensions of the senses we have lost or
              never attained, living by voices we shall never hear.”
            </p>
            <span className={style.quoteAuthor}>
              — Olivia Rhye, Product Designer
            </span>
          </blockquote>

          
        <p className={`mb-4 ${style.description}` }>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor. Ipsum sit mattis nulla
          quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
          congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
          Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor
          tellus. Sed vel, congue felis elit erat nam nibh orci.
        </p>
        </div>


        <div className="mt-5">
          <hr />
        </div>
      </div>
    </>
  );
};
