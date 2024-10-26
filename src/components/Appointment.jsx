import React, { useState } from "react";
import { API_END_POINT_APPOINTMENT } from "../api/Global";
import { toast } from "react-toastify";

const Appointment = () => {
  const [formData, setFormData] = useState({
    patient_name: "",
    email: "",
    phone: "",
    doctor: "",
    appointmentdate: "",
    appointmentslot: "",
    message: "",
  });

  const slots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
  ]

  const doctors = [
    "Doctor 1",
    "Doctor 2",
    "Doctor 3",
    "Doctor 4",
    "Doctor 5",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation (basic example)
    if (!formData.patient_name || !formData.email || !formData.phone || !formData.doctor || !formData.appointmentdate || !formData.appointmentslot || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(API_END_POINT_APPOINTMENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Appointment request submitted successfully!");
        setFormData({
          patient_name: "",
          email: "",
          phone: "",
          doctor: "",
          appointmentdate: "",
          appointmentslot: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }

   
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-darkbg">
      <div className="max-w-4xl mx-auto px-4" data-aos-duration="2000" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="name">Full Name*</label>
              <input
                type="text"
                name="patient_name"
                id="name"
                value={formData.patient_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter patient name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="abc@example.com"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="+91 789-123-4567"
                required
              />
            </div>

            {/* Doctor Selection */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="doctor">Select Doctor*</label>
              <select
                name="doctor"
                id="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>{doctor}</option>
                ))}
              </select>
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="date">Appointment Date*</label>
              <input
                type="date"
                name="appointmentdate"
                id="appointmentdate"
                value={formData.appointmentdate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Appointment Time */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="doctor">Select Slot*</label>
              <select
                name="appointmentslot"
                id="appointmentslot"
                value={formData.appointmentslot}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Select a Slot</option>
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            {/* Message (Optional) */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="message">Additional Message (Optional)</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Any specific request or information..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300 dark:bg-white dark:text-blue-600 dark:hover:bg-blue-500 hover:dark:text-blue-500 hover:dark:bg-gray-100"
              onClick={handleSubmit}
            >
              Submit Appointment Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
