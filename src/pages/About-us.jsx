import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/bgimg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About Pulse Hospital</h1>
            <p className="text-xl">Dedicated to Compassionate Care and Medical Excellence for Over 25 Years</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission, Vision, and Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>To provide high-quality healthcare with a focus on patient-centered care and medical excellence.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>To be recognized as a leading healthcare provider in the region, offering innovative medical solutions and compassionate care.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p>Integrity, compassion, excellence, respect, and teamwork form the foundation of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History and Achievements */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our History & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg">Since our founding in 1995, Pulse Hospital has grown from a small clinic to a state-of-the-art healthcare facility, offering specialized medical services to thousands of patients. With over 25 years of dedicated service, we have become a trusted name in healthcare in the region.</p>
              <ul className="list-disc pl-5 mt-4">
                <li>1995: Established as a small clinic</li>
                <li>2005: Expanded to include specialized departments</li>
                <li>2010: Achieved JCI Accreditation</li>
                <li>2020: Celebrated 25 years of compassionate care</li>
              </ul>
            </div>
            <div>
              <img src="https://via.placeholder.com/600x400" alt="Hospital Image" className="rounded shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Dedicated Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Doctor" className="rounded-full mb-4 mx-auto"/>
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
              <p>Chief Surgeon</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Doctor" className="rounded-full mb-4 mx-auto"/>
              <h3 className="text-xl font-semibold mb-2">Dr. Michael Lee</h3>
              <p>Head of Cardiology</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Doctor" className="rounded-full mb-4 mx-auto"/>
              <h3 className="text-xl font-semibold mb-2">Dr. Emily Davis</h3>
              <p>Lead Pediatrician</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <p className="text-lg mb-4">"Pulse Hospital provided excellent care during my treatment. The staff is extremely professional and compassionate. I highly recommend them!"</p>
              <p className="font-semibold">- John Smith</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <p className="text-lg mb-4">"The doctors at Pulse Hospital are knowledgeable and attentive. They made me feel comfortable throughout my entire experience."</p>
              <p className="font-semibold">- Maria Garcia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
        <p className="text-xl mb-6">Contact us today to schedule an appointment or learn more about our services.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100">
          Schedule an Appointment
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
