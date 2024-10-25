import React from "react";
import { Link } from "react-router-dom"; // For navigation to About page
import { LiaMicroscopeSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";

const About = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-darkbg dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mx-auto items-center py-16">
          {/* Text Content */}
          <div className=" mx-3 md:mx-auto " data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
              About Pulse Hospital
            </h2>
            <p className="text-md md:text-lg mb-6 max-w-xl text-wrap text-gray-700 dark:text-white text-justify">
              At Pulse Hospital, we are dedicated to providing high-quality,
              compassionate healthcare to our community. With state-of-the-art
              facilities and a team of experienced professionals, we offer a
              range of medical services to meet your health needs.
            </p>
            <p className="text-md md:text-lg mb-6 max-w-xl text-wrap text-gray-700 dark:text-white text-justify">
              We believe in a holistic approach to healthcare, addressing not
              only physical ailments but also emotional and mental well-being.
            </p>
            <Link to="/under-construction">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-blue-500 transition duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
          {/* Hospital image */}
          <div className="mx-auto" data-aos="fade-left">
            <img
              src="/bgimg.jpg"
              alt="Hospital image"
              className="p-[1px] rounded-md bg-white"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row py-16 items-center justify-center gap-20 " data-aos="fade-up">
          <div className=" flex flex-col  justify-between items-center  gap-4 p-8  px-16 transition-all duration-300 hover:scale-[103%]">
            <LiaMicroscopeSolid size={150} className="text-blue-800 dark:text-blue-500" />
            <div className=" text-3xl font-bold text-blue-600 dark:text-blue-500">15+</div>
            <h1 className=" text-[24px] font-[Poppins, sans-serif] font-bold text-blue-600 dark:text-blue-500">
              Our Speciality
            </h1>
          </div>
          
          <div className=" flex flex-col  justify-center items-center  gap-4 p-8  px-16 transition-all duration-300 hover:scale-[103%]">
            <FaUserDoctor size={150} className="text-blue-800 dark:text-blue-500" />
            <div className=" text-3xl font-bold text-blue-600 dark:text-blue-500">20+</div>
            <h1 className=" text-[24px] font-[Poppins, sans-serif] font-bold text-blue-600 dark:text-blue-500">
              Our Doctors
            </h1>
          </div>
          <div className=" flex flex-col  justify-center items-center  gap-4 p-8 px-16 transition-all duration-300 hover:scale-[103%]">
          <IoIosHeartEmpty size={150} className="text-blue-800 dark:text-blue-500" />
            <div className=" text-3xl font-bold text-blue-600 dark:text-blue-500">1000+</div>
            <h1 className=" text-[24px] font-[Poppins, sans-serif] font-bold text-blue-600 dark:text-blue-500">
              Our Patient
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
