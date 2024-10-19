import React from "react";
import { Link } from "react-router-dom";
import PlayButton from "./PlayBtn";

const Services = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-fixed py-20"
        style={{ backgroundImage: "url('/bgimg1.jpg" }}
      >
        <div className="h-96 flex flex-col md:flex-row container mx-auto gap-8 md:gap-0 ">
          <div className=" flex justify-center items-center md:w-1/2" data-aos="zoom-in">
            {/* left */}
            <PlayButton />
          </div>
          <div className=" flex justify-center " data-aos="zoom-in">
            {/* right */}
            <div className="pb-4">
              <h1 className=" font-bold text-3xl text-blue-700 mb-1">
                Available Services
              </h1>

              <h3 className=" font-semibold text-gray-700 md:pb-4">
                We have following Services
              </h3>
              <ul>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  Advanced Neonatal and Paediatric Intensive Care
                </li>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  Advanced Medical and Surgical Intensive Care
                </li>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  24x7 Diagnostic Facility
                </li>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  24x7 Ambulance Facility
                </li>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  24x7 Pharmacy Facility
                </li>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  Patient-Centered Care
                </li>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  Emergency Services
                </li>
                <li className=" text-indigo-500" style={{ lineHeight: "35px" }}>
                  Expert Doctors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 bg-gray-100 dark:bg-darkbg dark:text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center py-2 text-2xl font-bold font-serif text-blue-800">
            Why Choose Us
          </h1>
          <h2 className=" text-center pb-8 text-3xl text-blue-500">
            We are here for 24x7.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            <div data-aos="fade-up" className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/doctor.png" width={150} />
              <h1 className=" text-gray-800 pb-2 text-4xl font-bold mt-8 dark:text-white">
                Expert Doctors
              </h1>
            </div>
            <div data-aos="fade-up" className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              {/* <a href="https://www.flaticon.com/free-icons/diagnosis" title="diagnosis icons">Diagnosis icons created by kliwir art - Flaticon</a> */}
              <img src="/diagnostic.png" width={150} />
              <h1 className=" text-gray-800 pb-2 text-4xl font-bold mt-8 dark:text-white">
                24x7 Diagnostic Facility
              </h1>
            </div>
            <div data-aos="fade-up" className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/emergency-call.png" width={150} />
              <h3 className="text-gray-800 pb-2 text-4xl font-bold mt-8 dark:text-white">
                Emergency Services
              </h3>
            </div>

            <div data-aos="fade-up" className=" flex items-center justify-center">
              <button className=" py-1 ">
                <Link
                  to={"/services"}
                  className=" font-semibold bg-blue-700 text-white rounded px-3 py-[5px]"
                >
                  More Services
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
