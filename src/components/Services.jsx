import React from "react";

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
            <div className="p-2 bg-white rounded-xl shadow flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                A team of skilled and experienced medical professionals.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">24x7 Diagnostic Facility</h3>
              <p className="text-gray-600">
                State-of-the-art facilities for advanced medical care.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
              <p className="text-gray-600">
                24/7 emergency services to handle urgent health issues.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                Compassionate and personalized care for every patient.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">
              24x7 Ambulance Facility
              </h3>
              <p className="text-gray-600">
                Compassionate and personalized care for every patient.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Service"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">
              24x7 Pharmacy Facility
              </h3>
              <p className="text-gray-600">
                Compassionate and personalized care for every patient.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
