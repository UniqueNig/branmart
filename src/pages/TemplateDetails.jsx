import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTemplateDetail from '../components/templatedetails/HeroTemplateDetail'
import AboutTemplate from '../components/templatedetails/AboutTemplate'

const TemplateDetails = () => {
  return (
    <>
    <Navbar/>
    <HeroTemplateDetail/>
    <AboutTemplate/>
    <Footer/>
    </>
  )
}

export default TemplateDetails