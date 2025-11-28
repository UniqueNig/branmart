import React, { useState } from "react";
import style from "../AllCss.module.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqLeft = [
    {
      q: "What is Branmart?",
      a: "Branmart is an all-in-one website builder that helps you create and manage online stores without coding. You can build, customize, and sell in one place."
    },
    { q: "Can I connect my own domain?", a: "" },
    { q: "Can I track my sales and orders?", a: "" },
    { q: "Can I sell both physical and digital products?", a: "" },
    { q: "How secure is Branmart?", a: "" }
  ];

  const faqRight = [
    { q: "Do I need technical skills to use Branmart?", a: "" },
    { q: "Does Branmart support online payments?", a: "" },
    { q: "Is there a free plan?", a: "" },
    { q: "What happens if I cancel my subscription?", a: "" },
    { q: "Can I get help if I face issues?", a: "" }
  ];

  const renderFaqBlock = (item, i, globalIndex) => (
    <div
      key={i}
      className={`${style.faqBox} p-4 mb-3`}
      onClick={() => toggleFAQ(globalIndex)}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h6 className={style.faqQuestion}>{item.q}</h6>

        <span className={openIndex === globalIndex ? style.minus : style.plus}></span>
      </div>

      {openIndex === globalIndex && item.a && (
        <p className={`${style.faqAnswer} mt-3`}>{item.a}</p>
      )}
    </div>
  );

  return (
    <section className="py-5">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className={`${style.defaultHeading} fw-bold`}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className={`${style.defaultPara} text-muted`}>
            Learn more about how Branmart works, what it offers, and how to get <br />
            started with your website.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="row">
          
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            {faqLeft.map((item, i) => renderFaqBlock(item, i, i))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            {faqRight.map((item, i) =>
              renderFaqBlock(item, i, i + faqLeft.length)
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
