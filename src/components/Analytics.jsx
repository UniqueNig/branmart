import React from 'react'
import style from './AllCss.module.css'
import maindash from '../assets/maindash.png'
import leftdash from '../assets/leftdash.png'
import rightdash from '../assets/rightdash.png'

const Analytics = () => {
  return (
    <>
        <section className={`${style['analytics-section']} py-5`}>
      <div className="container text-center">
        {/* <!-- Subheading --> */}
        <p className={`${style.howItWorkspara} fade animated-fade-up mb-2`}>
          Know How Your Store Performs
        </p>

        {/* <!-- Main Heading --> */}
        <h2 className={`${style.sectionTitle} fade animated-fade-up mb-5`}>
          TRACK SALES, VISITORS, AND PERFORMANCE<br />
          WITH BUILT-IN ANALYTICS.
        </h2>

        <div
          className="position-relative d-flex justify-content-center fade animated-fade-up"
        >
          {/* <!-- Main Dashboard Image --> */}
          <img
            src={maindash}
            className={`img-fluid ${style.mainDashboard}`}
            alt="Dashboard Screenshot"
          />

          {/* <!-- Left floating card --> */}
          <img
            src={leftdash}
            className={`${style['floating-image']} ${style.leftFloat}`}
            alt="Left Floating UI"
          />

          {/* <!-- Right floating card --> */}
          <img
            src={rightdash}
            className={`${style['floating-image']} ${style.rightFloat}`}
            alt="Right Floating UI"
          />
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Analytics