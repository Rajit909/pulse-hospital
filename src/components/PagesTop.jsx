import React from 'react'

const PagesTop = ({title, desc, tabname}) => {
  return (
    <>
    <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/bgimg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4"> Pulse Hospital</h1>
            <p className="text-xl">{desc}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PagesTop