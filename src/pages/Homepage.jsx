import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Trusted from '../components/Trusted'
import BuildToRun from '../components/BuildToRun'
import StoreOnline from '../components/StoreOnline'
import Templates from '../components/Templates'
import WhyBranmart from '../components/WhyBranmart'
import Analytics from '../components/Analytics'
import Testimonials from '../components/Testimonials'
import ExploreTemplate from '../components/ExploreTemplate'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Trusted/>
    <BuildToRun/>
    <StoreOnline/>
    <Templates/>
    <WhyBranmart/>
    <Analytics/>
    <Testimonials/>
    <ExploreTemplate/>
    <Footer/>
    </>
  )
}

export default Homepage