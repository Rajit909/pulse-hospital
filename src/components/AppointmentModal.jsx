import React, { useState } from 'react'



const AppointmentModal = ({closeModal}) => {

 

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        date: "",
        time: "",
        message: "",
      });
    
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation (basic example)
        if (!formData.name || !formData.email || !formData.phone || !formData.doctor || !formData.date || !formData.time) {
          alert("Please fill in all required fields.");
          return;
        }
        // Handle form submission (e.g., send to an API)
        console.log("Appointment Request:", formData);
        alert("Appointment request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          doctor: "",
          date: "",
          time: "",
          message: "",
        });
      };
  return (
    <>
     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full max-w-2xl top-4">
            <div className="flex justify-end">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="text-white text-3xl font-bold "
              >
                ✖
              </button>
            </div>

            <section className="py-4">
      <div className="max-w-2xl mx-auto px-2" >
       
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md ">
        <h2 className="text-xl font-bold text-center mb-1 text-blue-500">Book an Appointment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-1" htmlFor="name">Full Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className=" px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter patient name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-1" htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className=" px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="abc@example.com"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-1" htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="+91 789-123-4567"
                required
              />
            </div>

            
            {/* Appointment Date */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-1" htmlFor="date">Appointment Date*</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Appointment Time */}
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-1" htmlFor="time">Preferred Time*</label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Message (Optional) */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 dark:text-white font-semibold mb-1" htmlFor="message">Additional Message (Optional)</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Any specific request or information..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-3">
            <button
              type="submit"
              className="bg-blue-800 text-white font-semibold px-3 py-2 rounded-md hover:bg-blue-500 transition duration-300 dark:bg-white dark:text-blue-600 dark:hover:bg-blue-500 hover:dark:text-blue-500 hover:dark:bg-gray-100"
            >
              Submit Appointment Request
            </button>
          </div>
        </form>
      </div>
    </section>

          </div>
        </div>
    </>
  )
}

export default AppointmentModal