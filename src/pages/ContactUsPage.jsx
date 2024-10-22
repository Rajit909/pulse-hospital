import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import PagesTop from "../components/PagesTop";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
    <PagesTop title={"Pulse Hospital"} desc={"Contact Us"} />

      <div className="pt-16 dark:bg-darkbg">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
