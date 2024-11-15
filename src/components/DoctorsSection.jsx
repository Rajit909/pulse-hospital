import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
<<<<<<< HEAD
// import {API_END_POINT} from '../api/Global.js'
=======
import {API_END_POINT} from '../api/Global.js'
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248

// Sample Data (You can replace it with real data from an API or database)
const doctors = [
  {
    id: 1,
    image: "/ammarahmed.jpg", // Replace with actual image URLs
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
<<<<<<< HEAD
  // const [data, setData] = useState("");

  // // console.log(data);
  // useEffect(() => {
  //   fetch(`${API_END_POINT}`) //local api
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.log("Error fetching data", error));
  // }, []);
=======
  const [data, setData] = useState("");

  // console.log(data);
  useEffect(() => {
    fetch(`${API_END_POINT}`) //local api
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248

  return (
    <section className="py-12 bg-gray-100 dark:bg-darkbg">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Meet Our Doctors</h2>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 " data-aos="fade-up"
      data-aos-duration="2000">
<<<<<<< HEAD
         {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              bio={doctor.bio}
             
              
            />
          ))}
=======
         {
          <>
          {doctors.map((item, idx)=>{
            return (
              <DoctorCard
                key={idx}
                id={item.id}
                image={item.image}
                name={item.name}
                specialty={item.specialty}
                bio={item.bio}
              />
            )
          })}
          </>
        }
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;