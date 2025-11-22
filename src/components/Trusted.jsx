import React from 'react'
import style from './AllCss.module.css'
import logo from '../assets/Logo (1).png'
import logo1 from '../assets/Logo.png'
import rec from '../assets/Rectangle 3.png'
import vect1 from '../assets/Vector (1).png'
import vect2 from '../assets/Vector (2).png'
import vect3 from '../assets/Vector (3).png'


const Trusted = () => {
  return (
    <>
        <section className="py-5 border-top border-bottom">
      <div className="container text-center">
     
        <h5 className={`fw-bold mb-2 ${style.trusted}`}>TRUSTED BY</h5>
        <p className={`text-muted mb-5 ${style.smallbus}`}>
          Trusted by small businesses, creators, and brands across industries.
        </p>

      
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-6 col-md-2">
            <img
              src={logo}
              className={`img-fluid shadow p-3 ${style['trusted-logo']}`}
              alt="logo"
            />
          </div>

          <div className="col-6 col-md-2">
            <img
              src={logo1}
              className={`img-fluid shadow p-3 ${style['trusted-logo']}`}
              alt="logo"
            />
          </div>

          <div className="col-6 col-md-2">
            <img
              src={rec}
              className={`img-fluid shadow p-3 ${style['trusted-logo']}`}
              alt="logo"
            />
          </div>

          <div className="col-6 col-md-2">
            <img
              src={vect1}
              className={`img-fluid shadow p-3 ${style['trusted-logo']}`}
              alt="logo"
            />
          </div>

          <div className="col-6 col-md-2">
            <img
              src={vect2}
              className={`img-fluid shadow p-3 ${style['trusted-logo']}`}
              alt="logo"
            />
          </div>

          <div className="col-6 col-md-2">
            <img
              src={vect3}
              className={`img-fluid shadow p-3 ${style['trusted-logo']}`}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Trusted