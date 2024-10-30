import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import {
  MdEvent,
  MdHandshake,
  MdLightMode,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiChatVoiceFill, RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import AdminProfile from "../components/Admin/AdminProfile";
import AdminEvents from "../components/Admin/AdminEvents";
import AdminUpdates from "../components/Admin/AdminUpdates";
import AdminAppointments from "../components/Admin/AdminAppointments";
import AdminTestimonials from "../components/Admin/AdminTestimonials";
import AdminFeedBacks from "../components/Admin/AdminFeedBacks";
import { IoIosNotificationsOutline } from "react-icons/io";
import DropDown from "../components/DropDown";
import { API_END_POINT_GET_USER } from "../api/Global";
import AdminDashboard from "../components/Admin/AdminDashboard";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [user, setUser] = useState([]);


  // fetch user data
  useEffect(() => {
    fetch(`${API_END_POINT_GET_USER}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false); // Close sidebar after selecting an item on mobile
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <div>
           <AdminDashboard/>
          </div>
        );
      case "Profile":
        return (
          <div>
            <AdminProfile />
          </div>
        );
      case "Events":
        return (
          <div>
            <AdminEvents />
          </div>
        );
      case "Updates":
        return (
          <div>
            <AdminUpdates />
          </div>
        );
      case "Appointment":
        return (
          <div>
            <AdminAppointments />
          </div>
        );
      case "Testimonials":
        return (
          <div>
            <AdminTestimonials />
          </div>
        );
      case "Feedbacks":
        return (
          <div>
            <AdminFeedBacks />
          </div>
        );
      case "Logout":
        return <div>Logging out...</div>;
      default:
        return <div>Welcome to the admin dashboard</div>;
    }
  };

  return (
    <div className="flex dark:bg-darkbg dark:text-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative flex flex-col w-32 md:w-64 bg-blue-800 bg-opacity-100 text-white md:bg-blue-800 md:dark:bg-darkbg md:border-r transition-transform duration-300 ease-in-out sidebar z-50`}
      >
        <div className="flex   h-16 bg-gray-900 md:hidden">
          <button className=" ml-5" onClick={toggleSidebar}>
            <RxCross1 className=" font-bold" size={25} />
          </button>
        </div>
        <div>
          <h1 className="text-sm md:text-2xl font-bold text-center p-2 pt-4 border-b md:border-0 md:p-4 md:block">
            Pulse Hospital
          </h1>
        </div>
        <nav className="flex flex-col flex-1 p-2 md:p-3 space-y-2">
          {" "}
          <a
            href="#"
            onClick={() => handleMenuClick("Dashboard")}
            className={`px-2 flex items-center justify-center gap-2 md:px-4 py-2 text-gray-100 hover:bg-gray-700 rounded ${
              activeMenu === "Dashboard" ? "bg-gray-700" : ""
            }`}
          >
            <MdEvent />
            Dashboard
          </a>
          <a
            href="#"
            onClick={() => handleMenuClick("Events")}
            className={`px-2 flex items-center justify-center gap-2 md:px-4 py-2 text-gray-100 hover:bg-gray-700 rounded ${
              activeMenu === "Events" ? "bg-gray-700" : ""
            }`}
          >
            <MdEvent />
            Events
          </a>
          <a
            href="#"
            onClick={() => handleMenuClick("Updates")}
            className={`flex items-center justify-center gap-2 px-2 md:px-4 py-2 text-gray-100 hover:bg-gray-700 rounded ${
              activeMenu === "Updates" ? "bg-gray-700" : ""
            }`}
          >
            <IoIosNotificationsOutline />
            Updates
          </a>
          <a
            href="#"
            onClick={() => handleMenuClick("Appointment")}
            className={`px-2 flex items-center justify-center gap-2 md:px-4 py-2 text-gray-100 hover:bg-gray-700 rounded ${
              activeMenu === "Appointment" ? "bg-gray-700" : ""
            }`}
          >
            <MdHandshake />
            Appointment
          </a>
          <a
            href="#"
            onClick={() => handleMenuClick("Testimonials")}
            className={`px-2 flex items-center justify-center gap-2 md:px-4 py-2 text-gray-100 hover:bg-gray-700 rounded ${
              activeMenu === "Testimonials" ? "bg-gray-700" : ""
            }`}
          >
            <RiChatVoiceFill />
            Testimonials
          </a>
          <a
            href="#"
            onClick={() => handleMenuClick("Feedbacks")}
            className={`flex items-center justify-center gap-2 px-2 md:px-4 py-2 text-gray-100 hover:bg-gray-700 rounded ${
              activeMenu === "Feedbacks" ? "bg-gray-700" : ""
            }`}
          >
            <MdOutlineFeedback size={22} />
            Feedbacks
          </a>
        
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen ">
        {/* Navbar */}
        <div className="flex items-center justify-between h-16 px-4 bg-white shadow-md dark:border-b border-gray-500 dark:bg-darkbg dark:text-white sticky top-0 ">
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="text-gray-800 dark:text-white focus:outline-none md:hidden"
          >
            <RiMenu2Line size={24} />
          </button>
          <div></div>
          <div className="flex ">
            <button
              onClick={toggleTheme}
              className="text-xl font-bold rounded-full dark:p-2 bg-zinc-100 p-[5px] cursor-pointer dark:text-white dark:bg-gray-900 dark:hover:text-white hover:dark:bg-[#1a83c6] text-black justify-self-end"
            >
              {theme === "light" ? <CiDark size={25}/> : <MdLightMode />}
            </button>

            {/* <a
            href="#"
            onClick={() => handleMenuClick("Profile")}
            className={`px-2 flex items-center justify-center gap-2 md:px-4 py-2 text-gray-100 hover:bg-gray-700 rounded
            }`}
          >
            <CgProfile />
            Profile
          </a> */}
            <div className=" mt-[1px] ml-1">
            <DropDown user={user} />
            </div>
          </div>
        </div>

        {/* Main Page Content */}
        <div className="p-4 w-full">
          <h1 className="text-2xl font-bold">Welcome back <span className=" uppercase">
            {}
            </span> </h1>
          <div className="mx-auto">
            <div className=" py-5 w-full">
              <h1 className="text-xl font-bold">{activeMenu}</h1>
              <div className="mt-2">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
