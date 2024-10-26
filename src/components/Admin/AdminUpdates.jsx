import React from 'react'
import { API_END_POINT_NEWS } from '../../api/Global.js'
import { Link } from 'react-router-dom'
import AddnewsModal from "./AddnewsModal.jsx"



const AdminUpdates = () => {
  const [news, setNews] = React.useState([])

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  } 

  React.useEffect(() => {
    fetch(`${API_END_POINT_NEWS}`)
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.log("Error fetching data",error))
  }, [])

  return (
    <>
    <div className='mx-auto mt-4 p-4 rounded-md'>
                <h2 className="text-2xl font-bold mb-4 text-center">Posted News & Updates</h2>
                <div className="grid grid-cols-1 p-10 border border-blue-500 shadow rounded-md h-96">
                  <marquee behavior="scroll" direction="up" loop="1">
                {
             <>

              {
                news && news.map((item, idx)=>{
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

            {
       isModalOpen && 
        <AddnewsModal closeModal={closeModal}/>
      }
    </>
  )
}

export default AdminUpdates