import React from 'react';
import style from './helpcentre.module.css';

const ExploreByTopic = () => {
  const topics = [
    {
      title: 'Getting Started',
      description:
        'Learn how to create your account, choose a template, and launch your website.',
      icon: 'bi-rocket-takeoff',
    },
    {
      title: 'Website Builder',
      description:
        'Step-by-step tutorials for designing and customizing your site.',
      icon: 'bi-pencil-square',
    },
    {
      title: 'E-commerce & Payments',
      description:
        'Help with setting up products, checkout, and payment gateways.',
      icon: 'bi-credit-card',
    },
    {
      title: 'Domains & Hosting',
      description:
        'Connect custom domains, manage hosting, and configure DNS settings.',
      icon: 'bi-globe',
    },
    {
      title: 'Account & Billing',
      description:
        'Manage subscriptions, invoices, and payment methods.',
      icon: 'bi-receipt',
    },
    {
      title: 'Troubleshooting',
      description:
        'Fix common errors and get back on track quickly.',
      icon: 'bi-life-preserver',
    },
  ];

  return (
    <section className={`container ${style.exploreWrapper}`}>
      <div className="row mb-5">
        <div className="col-12 text-center text-lg-start">
          <h2 className={style.titleEx}>EXPLORE BY TOPIC</h2>
          <p className={style.subtitleEx}>
            Select a category to find the right answers faster.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {topics.map((topic, index) => (
          <div className="col-xl-4  col-lg-4 col-md-6" key={index}>
            <div className={`shadow ${style.topicCard}`}>
              <i className={`bi ${topic.icon} ${style.iconEx}`}></i>

              <h5 className={style.cardTitle}>{topic.title}</h5>
              <p className={style.cardDescription}>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreByTopic;
