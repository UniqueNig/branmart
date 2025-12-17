import React from 'react'
import StoreSetupNav from '../components/dashboard/home/storesetup/StoreSetupNav'
import BreadCrum from '../components/dashboard/home/storesetup/BreadCrum'
import StoreFooter from '../components/dashboard/home/storesetup/StoreFooter'
import SelectedTheme from '../components/dashboard/home/storesetup/SelectedTheme'

const ThemeChoosen = () => {
  return (
    <>
    <StoreSetupNav/>
    <BreadCrum/>
    <SelectedTheme/>
    <StoreFooter/>
    </>
  )
}

export default ThemeChoosen