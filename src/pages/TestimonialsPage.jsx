import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PlayButton from "../components/PlayBtn";
import PagesTop from "../components/PagesTop";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "name1",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name2",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name3",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name4",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name5",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name6",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name7",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name8",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
    {
      name: "name9",
      youtuburl: "https://www.youtube.com/embed",
      imageurl: "/patient/img1.png",
    },
  ];
  return (
    <>
      <Navbar />
      <PagesTop title={"Pulse Hospital"} desc={"Patient Testimonials"} />
      <section className="  dark:bg-darkbg dark:text-white">
        <div className="mx-auto max-w-6xl  dark:bg-darkbg dark:text-white">
            <h1 className=" py-10 text-center text-2xl dark:text-gray-100 font-bold">Our Patient Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 mx- bg-gray-400 dark:bg-slate-600 rounded-xl px-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="p-1  bg-white dark:bg-gray-800 rounded-2xl shadow-xl text-center"
                >
                  <div className="mb-4 flex flex-col justify-center items-center relative">
                    <img
                      src={item.imageurl}
                      alt={item.name}
                      className="w-full h-80 rounded-xl"
                    />
                    <button
                      onClick={() => toggleModal(item.youtuburl)} // Pass the video URL on click
                      className="absolute"
                    >
                      <PlayButton />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
