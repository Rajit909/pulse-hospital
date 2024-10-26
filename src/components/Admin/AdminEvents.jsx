import React, { useEffect, useState } from 'react'
import { API_END_POINT_GET_EVENT } from '../../api/Global'
import AddEventModal from './AddEventModal'



const AdminEvents = () => {
  const [events, setEvents] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
  }


  console.log(events)
  useEffect(() => {
    fetch(API_END_POINT_GET_EVENT)
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
  }
  , [])


  return (
    <>
     <section className="py-12">
      <div className=' border rounded'>
      <div className="container mx-auto">
        <h2 className=" text-xl md:text-3xl font-bold text-center text-gray-800 dark:text-white my-4">
         Events  List
        </h2>
      </div>
      <div>
        <table style={{width: "100%"}}>
            <tr className=' border'>
              <th className=' border p-2'>Id</th>
              <th className=' border p-2'>Event Name</th>
              <th className=' border p-2'>Event Date</th>
              <th className=' border p-2'>Event Time</th>
              <th className=' border p-2'>Event Description</th>
            </tr>

            {
              events.map((event) => (
                <tr className=' border'>
                  <td className=' border px-2 py-1 text-center'>{event.id}</td>
                  <td className=' border px-2 py-1 text-center'>{event.title}</td>
                  <td className=' border px-2 py-1 text-center'>{event.event_date}</td>
                  <td className=' border px-2 py-1 text-center'>{event.event_time}</td>
                  <td className=' border px-2 py-1 text-center'>{event.event_desc}</td>
                </tr>
              ))
            }
        </table>
      </div>
      </div>
      <div className=" flex items-center justify-center mt-4">
          <button
            className="bg-blue-800 font-semibold text-white textt-sm md:text-md px-2 md:px-4 py-1 md:py-2 mt-4 rounded-md"
            onClick={openModal}
          >
            Add New Event
          </button>
        </div>
      </section>

      {isModalOpen && <AddEventModal closeModal={closeModal} />}
    </>
  )
}

export default AdminEvents