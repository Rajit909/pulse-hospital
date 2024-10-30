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

const AdminNavbar = () => {
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

     
      </nav>
    </>
  );
};

export default AdminNavbar;
