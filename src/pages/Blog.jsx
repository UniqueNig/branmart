import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid'
import Newsletter from '../components/blog/Newsletter'
import BuildWithBranmart from '../components/blog/BuildWithBranmart'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <BlogHero/>
    <BlogGrid/>
    <Newsletter/>
    <BuildWithBranmart/>
    <Footer/>
    </>
  )
}

export default Blog