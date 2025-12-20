import React from 'react'
import StoreSetupNav from '../components/dashboard/home/storesetup/StoreSetupNav'
import BusinessCrum from '../components/dashboard/home/businesssetup/BusinessCrum'
import StoreFooter from '../components/dashboard/home/storesetup/StoreFooter'
import KycInfo from '../components/dashboard/home/businesssetup/KycInfo'

const KycVerification = () => {
  return (
   <>
   <StoreSetupNav/>
   <BusinessCrum/>
   <KycInfo/>
   <StoreFooter/>
   </>
  )
}

export default KycVerification