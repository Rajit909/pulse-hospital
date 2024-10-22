import React from 'react';
import Slider from "react-slick";


const Hero = () => {
    const settings = {
        dots: true, // Show dots at the bottom
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Automatically play the slides
        autoplaySpeed: 3000, // 3 seconds between slides
    };

    return (
        <section className="relative">
            <Slider {...settings}>
                <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/group3.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Compassionate Care for Your Health</h1>
                            <p className="text-lg md:text-xl mb-6">We provide world-class medical care with a focus on excellence and compassion.</p>
                          <a href="/about">
                          <button className="bg-blue-600 dark:bg-darkbg px-6 py-3 text-white rounded-md hover:bg-blue-500 transition duration-300">
                                Learn More
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/group3.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Advanced Facilities for Better Health</h1>
                            <p className="text-lg md:text-xl mb-6">State-of-the-art technology and facilities for all your medical needs.</p>
                            <button className="bg-blue-600 dark:bg-darkbg px-6 py-3 text-white rounded-md hover:bg-blue-500 transition duration-300">
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('group1.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Doctors</h1>
                            <p className="text-lg md:text-xl mb-6">A dedicated team of professionals committed to your well-being.</p>
                            <button className="bg-blue-600 dark:bg-darkbg px-6 py-3 text-white rounded-md hover:bg-blue-500 transition duration-300">
                                Meet the Team
                            </button>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default Hero;
