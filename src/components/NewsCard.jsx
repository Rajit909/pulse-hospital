import React from "react";

const NewsCard = ({title, desc}) => {
  return (
    <>
      <div className=" p-4 dark:bg-slate-800 bg-gray-100 mt-5 rounded-md mx-4 md:mx-0" data-aos-duration="1000" data-aos="fade-up">
        <h1 className=" text-xl md:text-2xl font-bold text-blue-700">{title}</h1>
        <p className="text-gray-700 dark:text-gray-100 text-lg">
          {desc}
        </p>
      </div>
    </>
  );
};

export default NewsCard;
