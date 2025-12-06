import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <BlogHero/>
    <BlogGrid/>
    <Footer/>
    </>
  )
}

export default Blog