import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Pulse Hospital</h1>
              <p className="py-4">We are committed to providing high-quality healthcare services to the community.</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Services</h1>
              <ul className="py-4">
                <li>Emergency Services</li>
     
                <li>Diagnostic Services</li>
                <li>Specialized Treatments</li>
                <li>24x7 Doctor Consultation</li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Contact Us</h1>
              <p className="py-4">14 Civil Lines, Khurram Gautia Road near brBiyavani Kothi, Bareilly, India, Uttar Pradesh</p>
              <p>
                <a href="tel:+91-9681275415">+91-96812 75415</a>
                <br />
                <a href="email:khanammar151@gmail.com">
                khanammar151@gmail.com</a>
              </p>
              <p>
                <a href="mailto:" className="hover:underline">
                  </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer