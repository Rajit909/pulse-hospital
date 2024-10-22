import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PagesTop from "../components/PagesTop";

const newsDetails = [
  {
    id: 1,
    title: "News Title 1",
    desc: "Detailed description of News Title 1 lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "News Title 2",
    desc: "Detailed description of News Title 2...",
  },
  {
    id: 3,
    title: "News Title 3",
    desc: "Detailed description of News Title 3...",
  },
  {
    id: 4,
    title: "News Title 3",
    desc: "Detailed description of News Title 3...",
  },
  {
    id: 5,
    title: "News Title 3",
    desc: "Detailed description of News Title 3...",
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsDetails.find((item) => item.id === parseInt(id));

  return (
    <>
    <Navbar />
    <PagesTop title={"Pulse Hospital News"} />
    <div className="p-8 dark:bg-darkbg">
      {newsItem ? (
        <>
          <div className="dark:bg-slate-700 rounded bg-gray-100 dark:text-white py-4">
        <div className="md:max-w-4xl max-w-xl rounded-md mx-auto flex flex-col justify-center items-center dark:bg-slate-500 bg-white shadow my-8 pb-4">
        <h1 className="text-3xl font-bold pt-2">{newsItem.title}</h1>
        <hr className="w-1/2 mx-auto my-2 border-t-2 border-blue-800" />
        <p className=" p-2 m-4 shadow shadow-blue-500 border rounded-sm text-justify">{newsItem.desc}</p>
      </div>
      </div>
        </>
      ) : (
        <div className="dark:bg-slate-700 rounded bg-gray-100 dark:text-white py-4">
        <div className="md:max-w-4xl max-w-xl rounded-md mx-auto flex flex-col justify-center items-center dark:bg-slate-400 bg-white shadow my-8 pb-4">
        <h1 className="text-md text-red-500 dark:text-red-600 font-bold pt-2">News Not Found</h1>
      </div>
      </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default NewsDetail;
