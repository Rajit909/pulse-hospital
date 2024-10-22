import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({title, desc, newsId}) => {
  return (
    <>
      <div className=" p-4 dark:bg-slate-800 bg-gray-100 mt-5 rounded-md mx-4 md:mx-0 shadow-sm shadow-blue-300" data-aos-duration="1000" data-aos="fade-up">
        <h1 className=" text-xl md:text-2xl font-bold text-blue-700">{title}</h1>
        <p className="text-gray-700 dark:text-gray-100 text-lg">
          {desc}
        </p>
        <Link to={`/news/${newsId}`} className=" text-blue-600 mt-4">
          Read more
        </Link>
      </div>
    </>
  );
};

export default NewsCard;
