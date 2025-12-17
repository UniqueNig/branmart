import React from 'react'
import StoreSetupNav from '../components/dashboard/home/storesetup/StoreSetupNav'
import BreadCrum from '../components/dashboard/home/storesetup/BreadCrum'
import StoreFooter from '../components/dashboard/home/storesetup/StoreFooter'
import CompleteSubscription from '../components/dashboard/home/storesetup/CompleteSubscription'

const StoreSetupPayment = () => {
  return (
    <>
    <StoreSetupNav/>
    <BreadCrum/>
    <CompleteSubscription/>
    <StoreFooter/>
    </>
  )
}

export default StoreSetupPayment