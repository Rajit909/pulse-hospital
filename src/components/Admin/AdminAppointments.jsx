import React, { useEffect, useState } from 'react'
import { API_END_POINT_GET_APPOINTMENT } from '../../api/Global';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  console.log(appointments)
  useEffect(() => { 
    fetch(`${API_END_POINT_GET_APPOINTMENT}`)
      .then(response => response.json())
      .then(data => setAppointments(data))
      .catch(error => console.log("Error fetching data",error))
  }
  , [])


  return (
    <>
      
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className=" text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Appointments
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {appointments.map((appointment, index) => (
            <div key={index}>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">
                 Patient Name: {appointment.patient_name}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                Patient Email:  {appointment.email}
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                Patient phone : {appointment.phone}
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                 Doctor name: {appointment.doctor}
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                 Appointment Date: {appointment.appointmentdate}
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                Appointment Date: {appointment.appointmentslot}
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                 Patient message: {appointment.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>
  )
}

export default AdminAppointments