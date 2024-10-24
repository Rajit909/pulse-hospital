import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import NewsCard from "../components/NewsCard";
import PagesTop from "../components/PagesTop";

const News = () => {

    const news = [
        {
            id: 1,
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit "
        },
        {
            id: 2,
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            id: 3,
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: 4,                
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            id: 6,
            title: "News Title",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        },
    ]

  return (
    <>
      <Navbar />
     <PagesTop title={"Pulse Hospital News"} />

      <div className="dark:bg-darkbg bg-gray-100 dark:text-white py-4">
        <div className="md:max-w-4xl max-w-xl rounded-md mx-auto flex flex-col justify-center items-center dark:bg-slate-500 bg-white shadow my-8 pb-4 md:px-2">
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
                news.map((item) => {
                    return (
                        <div key={item.id}>
                        <NewsCard title={item.title} desc={item.desc} newsId={item.id}/>
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
