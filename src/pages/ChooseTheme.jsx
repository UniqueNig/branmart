import React from 'react'
import StoreSetupNav from '../components/dashboard/home/storesetup/StoreSetupNav'
import BreadCrum from '../components/dashboard/home/storesetup/BreadCrum'
import StoreFooter from '../components/dashboard/home/storesetup/StoreFooter'
import Shoptemplates from '../components/alltemplates/Shoptemplates'
import Hero from '../components/alltemplates/Hero'

const ChooseTheme = () => {
  return (
   <>
   <StoreSetupNav/>
   <BreadCrum/>
   <Hero/>
   <Shoptemplates/>
   <StoreFooter/>
   </>
  )
}

export default ChooseTheme