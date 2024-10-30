import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdEvent, MdHandshake, MdOutlineFeedback } from "react-icons/md";
import { RiChatVoiceFill } from "react-icons/ri";
import {
  API_END_POINT_FEEDBACK,
  API_END_POINT_GET_APPOINTMENT,
  API_END_POINT_GET_EVENT,
  API_END_POINT_NEWS,
  API_END_POINT_TESTIMONIAL,
} from "../../api/Global";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  console.log(events.length);
  useEffect(() => {
    fetch(API_END_POINT_GET_EVENT)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_END_POINT_NEWS}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  useEffect(() => {
    fetch(`${API_END_POINT_GET_APPOINTMENT}`)
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  useEffect(() => {
    fetch(`${API_END_POINT_TESTIMONIAL}`)
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_END_POINT_FEEDBACK}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container relative z-40 mx-auto mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mx-auto lg:w-full xl:shadow-small-blue">
          <a
            href="#"
            className="flex justify-center items-center py-5 gap-4 text-center border shadow shadow-blue-200 rounded-md"
          >
            <div className=" text-6xl font-semibold transition-all duration-300">{events.length}</div>
            <div className=" py-4">
              <MdEvent size={30} className="block mx-auto" />
              <p className="pt-2 text-sm font-medium capitalize  font-body dark:text-white pb-1 lg:text-lg md:text-base">
                Events
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex justify-center py-5 items-center gap-4 text-center border shadow shadow-blue-200 rounded-md"
          >
            <div className=" text-6xl font-semibold">{news.length}</div>
            <div className="py-4">
              <IoIosNotificationsOutline size={30} className="block mx-auto" />
              <p className=" text-sm font-medium capitalize  font-body dark:text-white pb-1 lg:text-lg md:text-base">
                Updates
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex justify-center py-5 items-center gap-4 text-center border shadow shadow-blue-200 rounded-md"
          >
            <div className=" text-6xl font-semibold">{appointments.length}</div>
            <div className=" py-4">
              <MdHandshake size={30} className="block mx-auto" />
              <p className="pt-2 text-sm font-medium capitalize  font-body dark:text-white pb-1 lg:text-lg md:text-base">
                Appointments
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex justify-center py-5 items-center gap-4 text-center border shadow shadow-blue-200 rounded-md"
          >
            <div className=" text-6xl font-semibold">{testimonials.length}</div>
            <div className=" py-4">
              <RiChatVoiceFill size={30} className="block mx-auto" />
              <p className="pt-2 text-sm font-medium capitalize  font-body dark:text-white pb-1 lg:text-lg md:text-base">
                Testimonials
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex justify-center py-5 items-center gap-4 text-center border shadow shadow-blue-200 rounded-md"
          >
            <div className=" text-6xl font-semibold">{feedbacks.length}</div>
            <div className=" py-4">
              <MdOutlineFeedback size={30} className="block mx-auto" />
              <p className="pt-2 text-sm font-medium capitalize  font-body dark:text-white pb-1 lg:text-lg md:text-base">
                Feedbacks
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
