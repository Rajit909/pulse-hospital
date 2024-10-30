import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import NewsCard from "../components/NewsCard";
import PagesTop from "../components/PagesTop";
import { API_END_POINT_NEWS } from "../api/Global";

const News = () => {

<<<<<<< HEAD
  // const [data, setData] = useState("");

  // console.log(data)

  // useEffect(() => {
  // fetch(`${API_END_POINT_NEWS}`)
  // .then((response) => response.json())
  // .then((data) => setData(data))
  // .catch((error) => console.log("Error fetching data", error));
  // }
  // , []);

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
=======
  const [data, setData] = useState("");

  console.log(data)

  useEffect(() => {
  fetch(`${API_END_POINT_NEWS}`)
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => console.log("Error fetching data", error));
  }
  , []);

    // const news = [
    //     {
    //         id: 1,
    //         title: "News Title",
    //         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit "
    //     },
    //     {
    //         id: 2,
    //         title: "News Title",
    //         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit"
    //     },
    //     {
    //         id: 3,
    //         title: "News Title",
    //         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    //     },
    //     {
    //         id: 4,                
    //         title: "News Title",
    //         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit"
    //     },
    //     {
    //         id: 6,
    //         title: "News Title",
    //         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
    //     },
    // ]
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248

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
<<<<<<< HEAD
                 news.map((item) => {
                  return (
                      <div key={item.id}>
                      <NewsCard title={item.title} desc={item.desc} newsId={item.id}/>
                      </div>
                  )
            })}
=======
             <>
              {
                data && data.map((item, idx)=>{
                  return (
                    <NewsCard
                      key={idx}
                      newsId={item.id}
                      title={item.title}
                      desc={item.descr}
                    />
                  )
                })
              }
             </>
            }
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;