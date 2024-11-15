import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { GiHospital } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdAddCall, MdOutlineEmail, MdLightMode } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const navigate = useNavigate();

  const location = useLocation();

  return (
    
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#2A3855] text-white p-2 dark:border-b-[0.2px]">
        <div className="md:max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="flex items-center gap-1">
              <MdAddCall /> +91-9681275415
            </span>
            <span className="flex items-center gap-1">
              <MdOutlineEmail /> khanammar151@gmail.com
            </span>
          </div>
          <div>
            <div className="flex items-center gap-4 pr-4">
              <button>
                <TiSocialFacebook size={22} />
              </button>
              <button>
                <TiSocialLinkedin size={22} />
              </button>
              <button>
                <TiSocialTwitter size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white dark:bg-darkbg dark:text-[darktext] shadow dark:bg-[#F5F5F5 ] top-0 sticky z-[1015]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GiHospital
                size={28}
                className="text-[#121829] dark:text-white font-bold"
              />
              <Link to="/">
                <span className="text-2xl font-bold text-[#121829] dark:text-white ml-1">
                  Pulse Hospital
                </span>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className=" flex items-center gap-8">
                <div className="flex space-x-4">
                  {
                    location.pathname == "/admin" ? (
                        <>
                        {
                          location.pathname !== "/admin" &&(
                       <Link to={"/admin"} className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold">Admin</Link> 
                          )
                        }
                        </>
                    ) : (
                      <>
                      {
                    location.pathname !== "/" &&(
                      <Link
                        to="/"
                        className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                        "
                      >
                        Home
                      </Link>
                    )
                  }
                 {
                  location.pathname !== "/about" &&(
                    <Link
                    to="/under-construction"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    About Us
                  </Link>)
                 }
                 {
                  location.pathname !== "/services" &&(
                     <Link
                    to="/under-construction"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    Services
                  </Link>)
                 }
                 {
                  location.pathname !== "/testimonials" &&(
                     <Link
                    to="/under-construction"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    Testimonials
                  </Link>)
                 }
                  {
                  location.pathname !== "/news" &&(
                     <Link
                    to="/news"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    News & Updates
                  </Link>)
                 }
                 {
                  location.pathname !== "/events" &&(
                      <Link
                      to="/under-construction"
                      className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                      "
                    >
                      Events
                    </Link>)

                 }
                 {
                  location.pathname !== "/contact" &&(
                    <Link
                    to="/contact"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    Contact
                  </Link>)
                 }

<<<<<<< HEAD
                      </>
                    )
                  }
=======
                 {/* <Link to={"/admin"} className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold">Admin</Link> */}
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248
                 

                </div>
                <button
                  onClick={toggleTheme}
                  className="text-xl font-bold bg-zinc-200 p-2 rounded-full cursor-pointer dark:text-white dark:bg-gray-900 dark:hover:text-white hover:dark:bg-[#1a83c6] text-black"
                >
                  {theme === "light" ? <CiDark /> : <MdLightMode />}
                </button>
              </div>
            </div>

            <div className="lg:hidden">
              <div className=" flex items-center">
                <button
                  onClick={toggleTheme}
                  className="text-md dark:text-2xl font-bold bg-zinc-200 p-2 rounded-full cursor-pointer dark:text-white dark:bg-gray-900 dark:hover:text-white hover:dark:bg-[#1a83c6] text-black mr-4"
                >
                  {theme === "light" ? <CiDark /> : <MdLightMode />}
                </button>
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-white focus:outline-none hover:text-gray-600 "
                >
                  <HiMenuAlt3
                    size={30}
                    className="text-[#121829] dark:text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-8 pt-2 pb-3 space-y-1 flex flex-col">
          {
                    location.pathname !== "/" &&(
                      <Link
                        to="/"
                        className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                        "
                      >
                        Home
                      </Link>
                    )
                  }
                 {
                  location.pathname !== "/about" &&(
                    <Link
                    to="/under-construction"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    About Us
                  </Link>)
                 }
                 {
                  location.pathname !== "/services" &&(
                     <Link
                    to="/under-construction"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    Services
                  </Link>)
                 }
                 {
                  location.pathname !== "/testimonials" &&(
                     <Link
                    to="/under-construction"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    Testimonials
                  </Link>)
                 }
                 {
                  location.pathname !== "/news" &&(
                     <Link
                    to="/under-construction"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    News & Updates
                  </Link>)
                 }
                {
                  location.pathname !== "/events" &&(
                      <Link
                      to="/under-construction"
                      className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                      "
                    >
                      Events
                    </Link>)
                    
                 }
                 {
                  location.pathname !== "/contact" &&(
                    <Link
                    to="/contact"
                    className="text-gray-800 dark:text-white hover:text-blue-600 font-semibold
                    "
                  >
                    Contact
                  </Link>)
                 }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
