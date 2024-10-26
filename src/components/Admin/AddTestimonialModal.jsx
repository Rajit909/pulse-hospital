import React, { useState } from "react";
import { toast } from "react-toastify";
import {  API_END_POINT_ADD_TESTIMONIAL } from "../../api/Global";

const AddTestimonialModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    image_url: "",
    video_url: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await fetch(`${API_END_POINT_ADD_TESTIMONIAL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok){
        throw new Error("Failed to add testimonials!");
      }
  

      const data = await response.json();
      console.log("data response",data);
      if (data.success) {
        toast("Testimonials added successfully!", {
          type: "success",
          position: "bottom-right",
        });
        closeModal();
      } else {
        toast("Failed to add Testimonials!",  {
          type: "error",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast("Failed to add Testimonials!",  {
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
                  Add new feedback
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {/* Name Input */}
                  <div className=" md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="name"
                    >
                      Patient image Url:
                    </label>
                    <input
                      name="image_url"
                      value={formData.image_url}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-500"
                      placeholder="Enter image_url..."
                    />
                  </div>
                  <div className=" md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="name"
                    >
                      Patient video Url:
                    </label>
                    <input
                      name="video_url"
                      value={formData.video_url}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-500"
                      placeholder="Enter image_url..."
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

export default AddTestimonialModal;






