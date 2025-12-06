import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/contact/ContactForm'
import GetinTouch from '../components/contact/GetinTouch'
import ReadyToStart from '../components/contact/ReadyToStart'

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <ContactForm/>
    <GetinTouch/>
    <ReadyToStart/>
    <Footer/>
    
    </>
  )
}

export default ContactUs