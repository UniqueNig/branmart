import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTemplateDetail from '../components/templatedetails/HeroTemplateDetail'
import AboutTemplate from '../components/templatedetails/AboutTemplate'
import ReviewTemplateDetail from '../components/templatedetails/ReviewTemplateDetail'
import AlsoLike from '../components/templatedetails/AlsoLike'

const TemplateDetails = () => {
  return (
    <>
    <Navbar/>
    <HeroTemplateDetail/>
    <AboutTemplate/>
    <ReviewTemplateDetail/>
    <AlsoLike/>
    <Footer/>
    </>
  )
}

export default TemplateDetails