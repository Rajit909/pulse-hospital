import React from 'react'
import PagesTop from '../components/PagesTop'
import EventsCard from '../components/EventsCard';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const EventsPage = () => {

    
const eventsData = [
    {
      title: "Free Health Check-up Camp",
      date: "---",
      time: "---",
      location: "----",
      description: "Join us for a free health check-up camp offering screenings for diabetes, blood pressure, and general wellness.",
    },
    {
      title: "Diabetes Awareness Workshop",
      date: "---",
      time: "---",
      location: "----",
      description: "Learn about managing and preventing diabetes from our expert doctors.",
    },
    {
      title: "Heart Health Seminar",
      date: "---",
      time: "---",
      location: "----",
      description: "A seminar focusing on heart health, symptoms to watch out for, and preventive measures.",
    },
    {
        title: "Cancer Awareness Campaign",
        date: "---",
        time: "---",
        location: "----",
        description: "Join us for a free health check-up camp offering screenings for diabetes, blood pressure, and general wellness.",
    },
    {
        title: "Mental Health Workshop",
        date: "---",
        time: "---",
        location: "----",
        description: "Join us for a free health check-up camp offering screenings for diabetes, blood pressure, and general wellness.",
      },
      {
        title: "Nutrition & Diet Workshop",
        date: "---",
        time: "---",
        location: "----",
        description: "Join us for a free health check-up camp offering screenings for diabetes, blood pressure, and general wellness.",
      },

    
  ];
  return (
    <>
    <Navbar/>
        <div>
            <PagesTop title="Pulse Hospital" desc={"Events"}/>
        </div>
        <section id="events" className="py-12 bg-gray-50 dark:bg-slate-800 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Events & Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div key={index}>
              <EventsCard
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default EventsPage