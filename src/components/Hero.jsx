import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/group1.jpg",
      title: "Compassionate Care for Your Health",
      description: "We provide world-class medical care with a focus on excellence and compassion.",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
    {
      image: "/group2.jpg",
      title: "Advanced Facilities for Better Health",
      description: "State-of-the-art technology and facilities for all your medical needs.",
      buttonText: "Our Services",
    },
    {
      image: "/group3.jpg",
      title: "Meet Our Expert Doctors",
      description: "A dedicated team of professionals committed to your well-being.",
      buttonText: "Meet the Team",
    },
    {
      image: "/group.jpg",
      title: "Your Health is Our Priority",
      description: "We are committed to providing the best care for you and your family.",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-96 md:h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                {slide.buttonText && (
                  <a href={slide.buttonLink}>
                    <button className="bg-blue-600 dark:bg-darkbg px-6 py-3 text-white rounded-md hover:bg-blue-500 transition duration-300">
                      {slide.buttonText}
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-75"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-75"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Hero;
