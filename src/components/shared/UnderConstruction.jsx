import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const UnderConstruction = () => {
  return (
    <>
    <Navbar/>
    <div class="bg-gray-100 dark:bg-darkbg">
  <div class="min-h-screen flex flex-col justify-center items-center">
    <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" class="mb-8 h-40"/>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center dark:text-white text-gray-700 mb-4">This page is under maintenance or  construction </h1>
    <p class="text-center text-gray-500 dark:text-white text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned!</p>
  </div>
</div>
<Footer/>
    </>
  )
}

export default UnderConstruction