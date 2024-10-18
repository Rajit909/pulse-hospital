import React from "react";
import DoctorCard from "./DoctorCard";

// Sample Data (You can replace it with real data from an API or database)
const doctors = [
  {
    id: 1,
    image: "/drammar.jpg", // Replace with actual image URLs
    name: "Dr. Ammar Ahmed Khan",
    specialty: "Cunsultant Physician - Diabetes & Critical Care",
    bio: "MBBS, MD, Medicine"
  },
  {
    id: 2,
    image: "/drimg2.jpg",
    name: "Dr. Bushra Noor",
    specialty: "Cunsultant Pediatrician ",
    bio: "M.D - Pediatrics "
  },
 
];

const DoctorsSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-darkbg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Meet Our Doctors</h2>
        <div className="grid gap-8 md:grid-cols-2 ">
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