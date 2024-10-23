import React from "react";
import DoctorCard from "./DoctorCard";

// Sample Data (You can replace it with real data from an API or database)
const doctors = [
  {
    id: 1,
    image: "/doctor4.jpg", // Replace with actual image URLs
    name: "Dr. Ammar Ahmad Khan",
    specialty: "Cunsultant Physician - Diabetes & Critical Care",
    bio: "MBBS, MD, Medicine"
  },
  {
    id: 2,
    image: "/doctor2.jpg",
    name: "Dr. Bushra Noor",
    specialty: "Cunsultant Pediatrician ",
    bio: "M.D - Pediatrics "
  },
 
];

const DoctorsSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-darkbg">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Meet Our Doctors</h2>
        <div className="grid gap-8 md:grid-cols-2 " data-aos="fade-up"
      data-aos-duration="2000">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              bio={doctor.bio}
             
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
