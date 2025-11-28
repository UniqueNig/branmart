import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Plans from '../components/pricing/Plans'
import ComparePlans from '../components/pricing/ComparePlans'
import Faq from '../components/pricing/Faq'
import StartFree from '../components/pricing/StartFree'

const Pricing = () => {
  return (
   <>
   <Navbar/>
   <Plans/>
   <ComparePlans/>
   <Testimonials/>
   <Faq/>
   <StartFree/>
   <Footer/>
   </>
  )
}

export default Pricing