import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_END_POINT_ADD_TESTIMONIAL } from "../../api/Global";

const AddTestimonialModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    file: null, // Updated to handle file upload
    video_url: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] }); // Store the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const data = new FormData(); // Use FormData to handle file upload
      data.append("file", formData.file);
      data.append("video_url", formData.video_url);

      const response = await fetch(`${API_END_POINT_ADD_TESTIMONIAL}`, {
        method: "POST",
        body: data, // Send FormData
      });

      const contentType = response.headers.get("content-type");

      // Check if the response is JSON
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();

        if (result.success) {
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
      } else {
        // If response is not JSON, log the response text (likely HTML error)
        const errorText = await response.text();
        console.log("Error Response:", errorText);
        throw new Error("Unexpected response format. Please check the backend.");
      }
    } catch (error) {
      console.log(error);
      toast("Failed to add Testimonials!",  {
        type: "error",
        position: "bottom-right",
      });
    }
  };


  return (  
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
        <div className="relative w-full max-w-2xl top-4">
          <div className="flex justify-end">
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
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold text-center mb-1 text-blue-500">
                  Add new feedback
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                    >
                      Patient image:
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-500"
                      accept="image/*" // Accept only image files
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="video_url"
                    >
                      Patient video Url:
                    </label>
                    <input
                      name="video_url"
                      value={formData.video_url}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-500"
                      placeholder="Enter video URL..."
                    />
                  </div>
                </div>

                <div className="text-center mt-3">
                  <button
                    type="submit"
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
