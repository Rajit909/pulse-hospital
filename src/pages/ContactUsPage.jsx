import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url('/bgimg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Pulse Hospital</h1>
            <p className="text-xl ">
              <Link to={"/"} className=" text-blue-700 font-bold">
                Home/
              </Link>
              <span className=" text-base">Contact</span>
            </p>
          </div>
        </div>
      </section>

      <div className="pt-16 dark:bg-darkbg">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
