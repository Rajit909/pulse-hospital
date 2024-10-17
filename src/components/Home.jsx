import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Profiles from './Profiles'
import Appointment from './Appointment'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <>
        {/* Hero section */}
        <Hero />
        {/* About us section */}
        <About />
        {/*Services  section */}
        <Services />
        {/*Doctors profiles  section */}
        <Profiles/>
        {/*Appointment booking  section */}
        <Appointment/>
        {/* Testimonials section */}
        <Testimonials />
        {/* Contact section */}
        <Contact/>

    </>
  )
}

export default Home