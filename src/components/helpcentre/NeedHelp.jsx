import React from 'react'
import style from "../contact/contact.module.css";

const NeedHelp = () => {
  return (
    <>
        <div className="container py-5">
    
<div className='text-start'>
              {/* Title */}
          <h2 className={`text-start ${style.sectionTitle}`}>NEED MORE HELP?</h2>
          <p className={`text-start ${style.sectionSubtitle}`}>
           Our support team is always ready to assist you.
          </p>
</div>
    
          {/* Cards */}
          <div className="row g-4 mt-4">
    
            {/* Live Chat */}
            <div className="col-md-6 col-lg-4">
              <div className={style.cardBox}>
                <div className={style.iconBox}>
                  <i className="bi bi-chat-dots-fill"></i>
                </div>
                <p className={style.cardTitle}>Live Chat</p>
                <p className={style.cardText}>
                  Available 24/7 inside your dashboard.
                </p>
                <p className={style.cardEmail}>support@branmart.com</p>
              </div>
            </div>
    
            {/* Email us */}
            <div className="col-md-6 col-lg-4">
              <div className={style.cardBox}>
                <div className={style.iconBox}>
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <p className={style.cardTitle}>Email us</p>
                <p className={style.cardText}>
                  Send us an email
                </p>
                <p className={style.cardEmail}>support@branmart.com</p>
              </div>
            </div>
    
            {/* Call Us */}
            <div className="col-md-6 col-lg-4">
              <div className={style.cardBox}>
                <div className={style.iconBox}>
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <p className={style.cardTitle}>Call us</p>
                <p className={style.cardText}>
                  Mon–Fri from 8am to 5pm.
                </p>
                <p className={style.cardEmail}>+1 (555) 000-0000</p>
              </div>
            </div>
    
          </div>
        </div>
    </>
  )
}

export default NeedHelp