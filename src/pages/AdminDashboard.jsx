import React, { useEffect, useState } from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import NewsCard from '../components/NewsCard'
import { API_END_POINT_NEWS } from '../api/Global'
import { Link } from 'react-router-dom'
import AddnewsModal from '../components/AddnewsModal'


const AdminDashboard = () => {
  const [data, setData] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  } 

  const closeModal = () => {
    setIsModalOpen(false);
  }

  // console.log(data)

  useEffect(() => {
  fetch(`${API_END_POINT_NEWS}`)
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => console.log("Error fetching data", error));
  }
  , []);
  return (
    <>
    <Navbar/>
    <section className=' py-12 bg-gray-100 dark:bg-darkbg dark:text-white'>
        <div className="container mx-auto md:max-w-6xl">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
                <p className="text-xl mt-4">Welcome to the Admin Dashboard</p>
            </div>

            <div className='mx-auto mt-4 p-4 rounded-md'>
                <h2 className="text-2xl font-bold mb-4 text-center">Posted News & Updates</h2>
                <div className="grid grid-cols-1 p-10 border border-blue-500 shadow rounded-md h-96">
                  <marquee behavior="scroll" direction="up" loop="">
                {
             <>

              {
                data && data.map((item, idx)=>{
                  return (
                    <>
                     <div className=' border-b border-blue-600 mb-5 pb-1'>
                        <h6 className=' leading-tight text-[10px]'>{item.title}</h6>
                        <p className=' leading-none text-sm'>{item.descr}</p>
                      </div>
                    </>
                  )
                })
              }
             </>
            }
            </marquee>
                </div>

                <div className=' flex items-center justify-center mt-4'>
                   
                   <button className="bg-blue-800 font-semibold text-white textt-sm md:text-md px-2 md:px-4 py-1 md:py-2 mt-4 rounded-md" onClick={openModal}>Post New Update</button>
               
                </div>
            </div>

        </div>
    </section>


    {
       isModalOpen && 
        <AddnewsModal closeModal={closeModal}/>
      }
    <Footer/>
    </>
  )
}

export default AdminDashboard