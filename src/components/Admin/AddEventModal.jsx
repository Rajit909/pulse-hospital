import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_END_POINT_ADD_EVENT } from "../../api/Global";

const AddEventModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    event_date: "",
    event_time: "",
    event_location: "",
    event_desc: "",

  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await fetch(`${API_END_POINT_ADD_EVENT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok){
        throw new Error("Failed to add event! response status is not 200");
      }
  

      const data = await response.json();
      console.log("data response",data);
      if (data.success) {
        toast("Event added successfully!", {
          type: "success",
          position: "bottom-right",
        });
        closeModal();
      } else {
        toast("Failed to add event!",  {
          type: "error",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast("Failed to add event!",  {
        type: "error",
        position: "bottom-right",
      })
    }
  }
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
            <div className="max-w-2xl mx-auto px-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md "
              >
                <h2 className="text-xl font-bold text-center mb-1 text-blue-500">
                  Add new event
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {/* Name Input */}
                  <div className=" md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="name"
                    >
                      Event title:
                    </label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-500"
                      placeholder="Enter title..."
                    />
                  </div>
                  <div className=" md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="event_time"
                    >
                      Event Time:
                    </label>
                    <input
                      name="event_time"
                      value={formData.event_time}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-500"
                      placeholder="Enter event time..."
                    />
                  </div>
                    
                  {/* Description */}
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="event_date"
                    >
                       Event date:
                    </label>
                    <input
                      name="event_date"
                      value={formData.event_date}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none text-gray-500 focus:ring-2 focus:ring-blue-600"
                      placeholder="Enter event date..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="event_location"
                    >
                       Event location:
                    </label>
                    <input
                      name="event_location"
                      value={formData.event_location}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none text-gray-500 focus:ring-2 focus:ring-blue-600"
                      placeholder="Enter event location..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="event_desc"
                    >
                       Event Description:
                    </label>
                    <textarea
                      name="event_desc"
                      rows={4}
                      value={formData.event_desc}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none text-gray-500 focus:ring-2 focus:ring-blue-600"
                      placeholder="Write your detailed event description here..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-3">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-800 text-white font-semibold px-3 py-2 rounded-md hover:bg-blue-500 transition duration-300 dark:bg-white dark:text-blue-600 dark:hover:bg-blue-500 hover:dark:text-blue-500 hover:dark:bg-gray-100"
                  >
                    Add Now
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddEventModal;



