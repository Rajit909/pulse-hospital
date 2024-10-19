import React from "react";
import { BsMailbox } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" dark:bg-darkbg py-4 text-gray-800">
          <div className="container px-4 mx-auto border-t border-gray-500">
            <div className="flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/4" data-aos-duration="2000" data-aos="fade-up">
                <a href="/" className="block w-56 mb-10">
                  <h1
                    style={{ fontFamily: "Nunito-Bold, Nunito" }}
                    className=" font-bold text-4xl dark:text-white text-gray-700"
                  >
                    Pulse Hospital
                  </h1>
                </a>
                <p className="text-justify dark:text-gray-200 text-gray-800 font-semibold">
                  At Pulse Hospital, we are dedicated to providing high-quality,
                  compassionate healthcare to our community. With
                  state-of-the-art facilities and a team of experienced
                  professionals, we offer a range of medical services to meet
                  your health needs.
                </p>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto" data-aos-duration="2000" data-aos="fade-up">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600 dark:text-white">
                    Quick Links
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <Link
                      to={"/"}
                      className=" dark:text-white text-gray-800 font-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/about"}
                      className=" dark:text-white text-gray-800 font-semibold"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/services"}
                      className=" dark:text-white text-gray-800 font-semibold"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact"}
                      className=" dark:text-white text-gray-800 font-semibold"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto" data-aos-duration="2000" data-aos="fade-up">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600 dark:text-white">
                    Our Services
                  </h2>
                </div>
                <ul className="leading-8 list-disc">
                  <li className=" dark:text-white text-gray-800 font-semibold">
                    <a href="/services">Expert Doctors</a>
                  </li>
                  <li className=" dark:text-white text-gray-800 font-semibold">
                    <a href="/services">24x7 Diagnostic Facility</a>
                  </li>
                  <li className=" dark:text-white text-gray-800 font-semibold">
                    <a href="/services">Emergency Services</a>
                  </li>
                  <li className=" dark:text-white text-gray-800 font-semibold">
                    <a href="/services">Patient-Centered Care</a>
                  </li>
                  <li className=" dark:text-white text-gray-800 font-semibold">
                    <a href="/services">24x7 Ambulance Facility</a>
                  </li>
                  <li className=" dark:text-white text-gray-800 font-semibold">
                    <a href="/services">24x7 Pharmacy Facility</a>
                  </li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600 dark:text-white">
                    Connect With Us
                  </h2>
                </div>

                <div className=" mx-auto dark:text-white mb-2" data-aos-duration="2000" data-aos="fade-up">
                 <ul>
                  <li className=" mb-4 font-semibold dark:font-thin"><span className=" font-bold">Address:</span> 14 Civil Lines, Khurram Gautia Road near brBiyavani Kothi, Bareilly, India, Uttar Pradesh</li>
                  <li className=" mb-4 font-semibold dark:font-thin"><span className=" font-bold">Phone:</span> +91-96812 75415</li>
                  <li className=" mb-4 font-semibold dark:font-thin"><span className=" font-bold">E-mail:</span> example@gmail.com</li>
                 </ul>
                </div>

                <div className=" flex gap-1" data-aos-duration="2000" data-aos="fade-up">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border dark:border-gray-100  dark:text-blue-500 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 dark:hover:text-white"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border dark:border-gray-100  dark:text-blue-500 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 dark:hover:text-white"
                >
                  <FaXTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border dark:border-gray-100  dark:text-blue-500 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 dark:hover:text-white"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border dark:border-gray-100  dark:text-blue-500 rounded-full hover:text-blue-400
            dark:hover:text-white hover:border-blue-400"
                >
                  <FaYoutube size={20} />
                </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className=" py-4 dark:bg-darkbg  ">
          <div
            className="container mx-auto px-4 border-t-[1.8px] dark:border-white border-gray-400
    dark:text-white pt-4"
          >
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left text-gray- dark:text-white font-semibold">
                Copyright ©{" "}
                {/* <script>new Date().getFullYear() > 2020 && document.write("- " + new Date().getFullYear())</script>- 2022 */}
                Pulse Hospital. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
