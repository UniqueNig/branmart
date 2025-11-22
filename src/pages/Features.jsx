import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/features/Hero'
import Testimonials from '../components/Testimonials'
import ExploreTemplate from '../components/ExploreTemplate'
import EverythingYouNeed from '../components/features/EverythingYouNeed'
import SellSmarter from '../components/features/SellSmarter'
import DesignFreedom from '../components/features/DesignFreedom'
import ReachCustomers from '../components/features/ReachCustomers'
import FavouriteTools from '../components/features/FavouriteTools'
import FastReliable from '../components/features/FastReliable'

const Features = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <EverythingYouNeed/>
    <SellSmarter/>
    <DesignFreedom/>
    <ReachCustomers/>
    <FavouriteTools/>
    <FastReliable/>
    <Testimonials/>
    <ExploreTemplate/>
    <Footer/>
    </>
  )
}

export default Features