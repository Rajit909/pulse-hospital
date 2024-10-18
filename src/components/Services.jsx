import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="py-12 bg-gray-100 dark:bg-darkbg dark:text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center py-2 text-2xl font-bold font-serif text-blue-800">
            Why Choose Us
          </h1>
          <h2 className=" text-center pb-8 text-3xl text-blue-500">
            We are here for 24x7.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/doctor.png" width={150} />
              <h1 className=" text-gray-800 pb-2 text-4xl font-bold mt-8 dark:text-white">
                Expert Doctors
              </h1>
            </div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              {/* <a href="https://www.flaticon.com/free-icons/diagnosis" title="diagnosis icons">Diagnosis icons created by kliwir art - Flaticon</a> */}
              <img src="/diagnostic.png" width={150} />
              <h1 className=" text-gray-800 pb-2 text-4xl font-bold mt-8 dark:text-white">
                24x7 Diagnostic Facility
              </h1>
            </div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:scale-[103%]">
              <img src="/emergency-call.png" width={150} />
              <h3 className="text-gray-800 pb-2 text-4xl font-bold mt-8 dark:text-white">
                Emergency Services
              </h3>
            </div>

            <div className=" flex items-center justify-center">
              <button className=" py-1 ">
                <Link to={"/services"} className=" font-semibold bg-blue-700 rounded px-3 py-[5px]">
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
