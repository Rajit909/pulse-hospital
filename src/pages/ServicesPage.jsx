import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const ServicesPage = () => {
  return (
    <>
        <Navbar/>
        <section className="relative bg-cover bg-center h-[400px] " style={{ backgroundImage: "url('/bgimg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Pulse Hospital</h1>
            <p className="text-xl">Our Services</p>
          </div>
        </div>
      </section>
      
        <section className="py-12 bg-gray-100 dark:bg-darkbg dark:text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center py-2 text-2xl font-bold font-serif text-blue-800">
            Why Choose Us
          </h1>
          <h2 className=" text-center pb-8 text-3xl text-blue-500">
            We are here for 24x7.
          </h2>

          <div className='mx-auto text-justify py-10 text-gray-700 dark:text-gray-100 text-lg'>
          At Pulse Hospital, we are committed to delivering comprehensive, high-quality healthcare services tailored to meet the unique needs of our patients. With a focus on compassion and innovation, our experienced team of medical professionals utilizes the latest technologies and treatment methodologies to ensure the best possible outcomes. Whether you're seeking routine care or specialized treatments, we offer a wide range of services designed to enhance your health and well-being
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/doctor.png" className=' w-32 md:w-52'/>
              <h1 className=" text-gray-800 pb-2 text-2xl md:text-4xl font-bold mt-8 dark:text-white">
                Expert Doctors
              </h1>
            </div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              {/* <a href="https://www.flaticon.com/free-icons/diagnosis" title="diagnosis icons">Diagnosis icons created by kliwir art - Flaticon</a> */}
              <img src="/diagnostic.png" className=' w-32 md:w-52' />
              <h1 className=" text-gray-800 pb-2 text-2xl md:text-4xl font-bold mt-8 dark:text-white">
                24x7 Diagnostic Facility
              </h1>
            </div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/emergency-call.png" className=' w-32 md:w-52' />
              <h3 className="text-gray-800 pb-2 text-2xl md:text-4xl font-bold mt-8 dark:text-white">
                Emergency Services
              </h3>
            </div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/doctor-visit.png" className=' w-32 md:w-52' />

              <h3 className="text-gray-800 pb-2 text-2xl md:text-4xl font-bold mt-8 dark:text-white">
                Patient-Centered Care
              </h3>
            </div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/ambulance.png" className=' w-32 md:w-52' />
              <h3 className="text-gray-800 pb-2 text-2xl md:text-4xl font-bold mt-8 dark:text-white">
                24x7 Ambulance Facility
              </h3>
            </div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/drugstore.png" className=' w-32 md:w-52' />
              <h3 className="text-gray-800 pb-2 text-2xl md:text-4xl font-bold mt-8 dark:text-white">
                24x7 Pharmacy Facility
              </h3>
            </div>
          </div>
        </div>
      </section>  
      <Footer/>
    </>
  )
}

export default ServicesPage