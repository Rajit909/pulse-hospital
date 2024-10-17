import React from "react";
import { Link } from "react-router-dom"; // For navigation to About page

const About = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">About Pulse Hospital</h2>
            <p className="text-lg mb-6 text-gray-700">
              At Pulse Hospital, we are dedicated to providing high-quality, compassionate healthcare to our community. With state-of-the-art facilities and a team of experienced professionals, we offer a range of medical services to meet your health needs.
            </p>
            <Link to="/about">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>

          {/* Image or Icons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded shadow flex flex-col items-center text-center">
              <img src="https://via.placeholder.com/100" alt="Service" className="mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">A team of skilled and experienced medical professionals.</p>
            </div>
            <div className="p-6 bg-white rounded shadow flex flex-col items-center text-center">
              <img src="https://via.placeholder.com/100" alt="Service" className="mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art facilities for advanced medical care.</p>
            </div>
            <div className="p-6 bg-white rounded shadow flex flex-col items-center text-center">
              <img src="https://via.placeholder.com/100" alt="Service" className="mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
              <p className="text-gray-600">24/7 emergency services to handle urgent health issues.</p>
            </div>
            <div className="p-6 bg-white rounded shadow flex flex-col items-center text-center">
              <img src="https://via.placeholder.com/100" alt="Service" className="mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">Compassionate and personalized care for every patient.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
