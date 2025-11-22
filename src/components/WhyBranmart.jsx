import React from 'react'
import style from './AllCss.module.css'
import image24 from '../assets/image 24@2x.png'


const WhyBranmart = () => {
  return (
    <>
        <section className={`py-5 ${style.whyBranmart}`}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* <!-- LEFT CONTENT --> */}
          <div className="col-lg-6">
            <p className={`${style.howItWorkspara} fw-semibold small mb-1`}>Why Branmart</p>

            <h2 className={`fw-bold mb-4 ${style.buildToRun}`}>
              WHY BUSINESSES CHOOSE <br />
              BRANMART
            </h2>

            <div className="row g-4">
              {/* <!-- Fast Setup --> */}
              <div className="col-md-6 col-sm-12">
                <div className={style.featureBox}>
                  <div className="icon mb-2">⚡</div>
                  <h6 className={`fw-bold ${style.textBrown}`}>FAST SETUP</h6>
                  <p className={`text-muted small ${style.buildToRunPara} m-0`}>
                    Launch your store in less than 30 minutes.
                  </p>
                </div>
              </div>

              {/* <!-- Flexible Design --> */}
              <div className="col-md-6 col-sm-12">
                <div className={style.featureBox}>
                  <div className="icon mb-2">🖌️</div>
                  <h6 className={`fw-bold ${style.textBrown}`}>FLEXIBLE DESIGN</h6>
                  <p className={`text-muted small ${style.buildToRunPara} m-0`}>
                    Customize, edit text, images, and layout easily.
                  </p>
                </div>
              </div>

              {/* <!-- Secure Payments --> */}
              <div className="col-md-6 col-sm-12">
                <div className={`${style.featureBox} border-top pt-4`}>
                  <div className="icon mb-2">💳</div>
                  <h6 className={`fw-bold ${style.textBrown}`}>SECURE PAYMENTS</h6>
                  <p className={`text-muted small ${style.buildToRunPara} m-0`}>
                    Integrated gateways for global transactions.
                  </p>
                </div>
              </div>

              {/* <!-- All-in-one Platform --> */}
              <div className="col-md-6 col-sm-12">
                <div className={`${style.featureBox} border-top pt-4`}>
                  <div className="icon mb-2">🌐</div>
                  <h6 className={`fw-bold ${style.textBrown}`}>ALL-IN-ONE PLATFORM</h6>
                  <p className={`text-muted small ${style.buildToRunPara} m-0`}>
                    Hosting, domains, analytics, and marketing tools included.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT IMAGE --> */}
          <div className="col-lg-6">
            <img
              src={image24}
              alt="Branmart Team"
              className="img-fluid rounded-4 shadow-sm w-75 h-50"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhyBranmart