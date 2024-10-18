import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const ContactUsPage = () => {
  return (
    <>
    <Navbar/>
    <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/bgimg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Pulse Hospital</h1>
            <p className="text-2xl font-semibold">Contact Us</p>
          </div>
        </div>
      </section>
      contact
<Footer/>
    </>
  )
}

export default ContactUsPage