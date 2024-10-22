import React from 'react'

const EventsCard = ({ title, date, time, location, description}) => {
  return (
    <>
             <div
              className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in-up"
            >
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-white mb-1">
                <strong>Date:</strong> {date}
              </p>
              <p className="text-sm text-gray-500 dark:text-white mb-1">
                <strong>Time:</strong> {time}
              </p>
              <p className="text-sm text-gray-500 dark:text-white mb-1">
                <strong>Location:</strong> {location}
              </p>
              <p className="text-gray-600 dark:text-gray-200 mt-4">{description}</p>
              {/* <button className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button> */}
            </div>
    </>
  )
}

export default EventsCard