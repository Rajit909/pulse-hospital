import React, { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { API_END_POINT_CONTACT } from "../api/Global";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 

  console.log(formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${API_END_POINT_CONTACT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("An error occurred! Please try again.");
        
      }

      const result = await response.json();
      console.log(result);
      if (result.success) {
        toast("Message sent successfully.",{
          type: "success",
          position: "bottom-right",
        });
      } else {
        toast("An error occurred! Please try again.",{
          type:"error",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred! Please try again.");
    }

  }    


  return (
    <>
      <section className="px-2 md:px-auto mx-auto max-w-full dark:bg-darkbg pb-4">

      <div className=" max-w-3xl mx-auto text-center pb-10" data-aos-duration="1000" data-aos="fade-up">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white border-b-4 mx-28 md:mx-60 border-blue-500">Contact Us</h2>
          <p className="md:text-lg text-gray-700 mb-8 dark:text-white">
            We’d love to hear from you! Whether you have a question, feedback,
            or need assistance, feel free to reach out to us. Our team is here
            to help you.
          </p>
        </div>
        <div 
          data-aos-duration="1000" data-aos="zoom-in"
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.8358158482512!2d79.43109192120656!3d28.34846994596123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a001003921f881%3A0x7146fc25ba4f7a00!2sDr.Ammar&#39;s%20Pulse%20Hospital!5e0!3m2!1sen!2sin!4v1729832117974!5m2!1sen!2sin"
            width="100%"
            height="480"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="container mx-auto md:px-12 " data-aos-duration="1000" data-aos="fade-up">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300 dark:bg-slate-800">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                    />
             
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
        
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white "
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                    ></textarea>
        
                  </div>

                  <button
                    type="button"
                    className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
                    onClick={handleSubmit}
               >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    <MdOutlineEmail size={30} className="" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Technical support
                        </p>
                        <p className="text-sm text-neutral-700 dark:text-gray-200">
                          example@gmail.com
                        </p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                        <FaRegAddressCard size={28}/>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Address
                        </p>
                        <p className="text-sm text-neutral-700 dark:text-gray-200 text-justify">
                          14 Civil Lines, Khurram Gautia Road near brBiyavani
                          Kothi, Bareilly, India, Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                        <CiMobile3 size={30}/>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold  dark:text-white">Mobile</p>
                        <p className="text-neutral-700 dark:text-gray-200">+91-96812 75415</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                        <FcClock size={30}/>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Working days</p>
                        <p className="text-neutral-700 dark:text-gray-200"> Monday to Fri</p>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
