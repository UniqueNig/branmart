import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/blog/Newsletter'
import RelatedNews from '../components/blogdetails/RelatedNews'
import { BlogFullDetails } from '../components/blogdetails/BlogFullDetails'

const BlogDetails = () => {
  return (
   <>
   <Navbar/>
   <BlogFullDetails/>
   <RelatedNews/>
   <Newsletter/>
   <Footer/>
   </>
  )
}

export default BlogDetails