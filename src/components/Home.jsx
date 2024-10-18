import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Profiles from './Profiles'
import Appointment from './Appointment'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

const Home = () => {
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

        <Footer/>

    </>
  )
}

export default Home