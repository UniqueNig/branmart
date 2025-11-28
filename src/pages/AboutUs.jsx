import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/about/Hero'
import OurJourney from '../components/about/OurJourney'
import PurposeAndDirection from '../components/about/PurposeAndDirection'
import WhatWeOffer from '../components/about/WhatWeOffer'
import BuildYourBusiness from '../components/about/BuildYourBusiness'
import WhatWeStandFor from '../components/about/WhatWeStandFor'

const AboutUs = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <OurJourney/>
   <PurposeAndDirection/>
   <WhatWeOffer/>
   <WhatWeStandFor/>
   <BuildYourBusiness/>
   <Footer/>
   </>
  )
}

export default AboutUs