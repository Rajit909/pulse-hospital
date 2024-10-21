import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Profiles from './Profiles'
import Appointment from './Appointment'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

import AOS from "aos";
import "aos/dist/aos.css";
import Faq from './Faq'

const Home = () => {
 

  useEffect(() => {
    AOS.init({ duration: 1200 }); // You can set options like duration here
  }, []);

  return (
    <>
    <Navbar/>
        {/* Hero section */}
        <Hero />
        {/* About us section */}
        <About />
        {/*Services  section */}
        <Services />
        {/*Doctors profiles  section */}
        <Profiles/>
        
        {/* Testimonials section */}
        <Testimonials />
        {/*Appointment booking  section */}
        <Appointment/>
        {/* Contact section */}
        <Contact/>
        {/* FaQ */}
        <Faq/>

        <Footer/>

    </>
  )
}

export default Home