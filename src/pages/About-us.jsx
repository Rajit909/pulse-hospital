import React, { useState } from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import DoctorsSection from "../components/DoctorsSection";
import Testimonials from "../components/Testimonials";
import Appointment from "../components/Appointment";
import AppointmentModal from "../components/AppointmentModal";
import Faq from "../components/Faq";
import PagesTop from "../components/PagesTop";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  } 
  return (
    <>
    <Navbar/>
      {/* Hero Section */}
      <PagesTop desc={"Dedicated to Compassionate Care and Medical Excellence for Over 25 Years"}/>

      {/* Mission, Vision, Values */}
      <section className="py-12 bg-gray-100 dark:bg-darkbg dark:text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission, Vision, and Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-lg dark:bg-slate-800"  data-aos="zoom-in-right"
      data-aos-duration="2000">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>To provide high-quality healthcare with a focus on patient-centered care and medical excellence.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg dark:bg-slate-800"  data-aos="zoom-in-up"
      data-aos-duration="2000">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>To be recognized as a leading healthcare provider in the region, offering innovative medical solutions and compassionate care.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg dark:bg-slate-800"  data-aos="zoom-in-left"
      data-aos-duration="2000">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p>Integrity, compassion, excellence, respect, and teamwork form the foundation of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History and Achievements */}
      <section className="py-12 bg-white dark:bg-darkbg dark:text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our History & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div  data-aos="fade-right"
      data-aos-duration="1000">
              <p className="text-lg">Since our founding in 1995, Pulse Hospital has grown from a small clinic to a state-of-the-art healthcare facility, offering specialized medical services to thousands of patients. With over 25 years of dedicated service, we have become a trusted name in healthcare in the region.</p>
              <ul className="list-disc pl-5 mt-4">
                <li>1995: Established as a small clinic</li>
                <li>2005: Expanded to include specialized departments</li>
                <li>2010: Achieved JCI Accreditation</li>
                <li>2020: Celebrated 25 years of compassionate care</li>
              </ul>
            </div>
            <div  data-aos="fade-left"
      data-aos-duration="1000">
              <img src="https://via.placeholder.com/600x400" alt="Hospital Image" className="rounded shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 bg-gray-100 dark:bg-darkbg dark:text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Dedicated Team</h2>
          <div className="">
           <DoctorsSection/>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 bg-white dark:bg-darkbg dark:text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
      <div  data-aos="zoom-in-up"
      data-aos-duration="2000">
        <Testimonials/>
      </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-400 text-white text-center dark:bg-slate-800">
        <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
        <p className="text-xl mb-6">Contact us today to schedule an appointment or learn more about our services.</p>
        <button className="bg-white text-blue-600 dark:bg-slate-200 px-3 md:px-6 py-2 md:py-3 rounded font-bold hover:bg-slate-100">
          Schedule an Appointment
        </button>
      </section>
      <Faq/>

      

      {/* modal */}

      {/* {
        isModalOpen && (
          
          <AppointmentModal/>
        )
      } */}

      <Footer/>
    </>
  );
};

export default AboutUs;
