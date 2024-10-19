import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import NewsCard from "../components/NewsCard";

const News = () => {

    const news = [
        {
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit "
        },
        {
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        },
    ]

  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[400px] "
        style={{ backgroundImage: "url('/bgimg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Pulse Hospital</h1>
            <p className="text-xl">News & Updates</p>
          </div>
        </div>
      </section>

      <div className="dark:bg-darkbg bg-gray-100 dark:text-white py-4">
        <div className="md:max-w-4xl max-w-xl rounded-md mx-auto flex flex-col justify-center items-center dark:bg-slate-500 bg-white shadow my-8 pb-4">
          <div className=" mx-4">
            <h1 className="text-2xl font-bold text-blue-800 pt-8">
              News & Updates
            </h1>
            <p className="text-gray-700 dark:text-gray-100 text-lg">
              Stay up-to-date with the latest news and updates from Pulse
              Hospital.
            </p>
          </div>
        
            {
                news.map((item, idx) => {
                    return (
                        <div key={idx}>
                        <NewsCard title={item.title} desc={item.desc}/>
                        </div>
                    )
                })
            }
        
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
