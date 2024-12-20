import React, { useState } from "react";
import { API_END_POINT_ADD_NEWS } from "../../api/Global";
import { toast } from "react-toastify";

const AddnewsModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    descr: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await fetch(API_END_POINT_ADD_NEWS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok){
        throw new Error("Failed to add news!");
      }
  

      const data = await response.json();
      console.log("data response",data);
      if (data.success) {
        toast("News added successfully!", {
          type: "success",
          position: "bottom-right",
        });
        closeModal();
      } else {
        toast("Failed to add news!",  {
          type: "error",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast("Failed to add news!",  {
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
                  Add new News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {/* Name Input */}
                  <div className=" md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="name"
                    >
                      News & update title *
                    </label>
                    <textarea
                      name="title"
                      rows="1"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-500"
                      placeholder="Enter title..."
                    />
                  </div>
                    
                  {/* Description */}
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 dark:text-white font-semibold mb-1"
                      htmlFor="message"
                    >
                      Description:
                    </label>
                    <textarea
                      name="descr"
                      rows="4"
                      value={formData.descr}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded-md focus:outline-none text-gray-500 focus:ring-2 focus:ring-blue-600"
                      placeholder="Write your detailed news & Update here..."
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
                    Post Now
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

export default AddnewsModal;
