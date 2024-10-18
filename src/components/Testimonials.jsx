import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
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
    <>
      <section className="relative py-12 mx-auto bg-blue-100 dark:bg-darkbg">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">What Our Patients Say?</h2>
        <div className=" mx-10 md:mx-30">

        <Slider {...settings} >
          <div className="relative ">
            <div className="max-w-6xl mx-auto p-10 text-wrap bg-white dark:bg-slate-800 rounded-lg">
              <div className="">
                <p className=" text-gray-700 text-center dark:text-white">
                  "I was very impressed with the professionalism of the staff
                  and the quality of care I received. I would highly recommend
                  this hospital to anyone."
                </p>
              </div>
              <h2 className=" text-xl font-semibold text-center text-gray-900 dark:text-white">Patient name</h2>
            </div>
          </div>
          <div className="relative ">
            <div className="max-w-6xl mx-auto text-wrap p-10 bg-white dark:bg-slate-800 rounded-lg">
              <div className="">
                <p className=" text-gray-700 text-center dark:text-white">
                  "I was very impressed with the professionalism of the staff
                  and the quality of care I received. I would highly recommend
                  this hospital to anyone."
                </p>
              </div>
              <h2 className=" text-xl font-semibold text-center text-gray-900 dark:text-white">Patient name</h2>
            </div>
          </div>
          <div className="relative ">
            <div className="max-w-6xl mx-auto text-wrap p-10 bg-white dark:bg-slate-800 rounded-lg">
              <div className="">
                <p className=" text-gray-700 text-center dark:text-white">
                  "I was very impressed with the professionalism of the staff
                  and the quality of care I received. I would highly recommend
                  this hospital to anyone."
                </p>
              </div>
              <h2 className=" text-xl font-semibold text-center text-gray-900 dark:text-white">Patient name</h2>
            </div>
          </div>
          
        </Slider>
        </div>

      </section>
    </>
  );
};

export default Testimonials;
