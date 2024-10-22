import React from "react";

const DoctorCard = ({ image, name, specialty, bio }) => {
  return (
    <div className="bg-white border-none shadow-md rounded-lg overflow-hidden  transform hover:scale-[101%] transition-all duration-300" >
      <img src={image} alt={name} className="w-full min-h-[350px] max-h-[350px]" />
      <div className="p-4 dark:bg-slate-800">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{name}</h3>
        <p className="text-gray-700 dark:text-white  font-medium">{specialty}</p>
        <p className="text-gray-600 dark:text-white  mt-2 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default DoctorCard;