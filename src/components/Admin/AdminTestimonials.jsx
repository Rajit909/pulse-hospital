import React, { useEffect, useState } from "react";
import { API_END_POINT_TESTIMONIAL } from "../../api/Global";
import AddTestimonialModal from "./AddTestimonialModal";

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(testimonials);
  useEffect(() => {
    fetch(`${API_END_POINT_TESTIMONIAL}`)
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  return (
    <>
      <section className="py-12">
        <div className=" border rounded">
          <div className="container mx-auto">
            <h2 className=" text-xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Patient Testimonials List
            </h2>
          </div>
          <div>
            <table style={{ width: "100%" }}>
              <tr className=" border">
                <th className=" border ">Id</th>
                <th className=" border ">Image Url</th>
                <th className=" border ">Video Url</th>
              </tr>

              {testimonials.map((testimonial) => (
                <tr className=" border">
                  <td className=" border px-2 text-center">{testimonial.id}</td>
                  <td className=" border px-2 text-center">
                    {testimonial.image_url}
                  </td>
                  <td className=" border px-2 text-center">
                    {testimonial.video_url}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-4">
          <button
            className="bg-blue-800 font-semibold text-white textt-sm md:text-md px-2 md:px-4 py-1 md:py-2 mt-4 rounded-md"
            onClick={openModal}
          >
            Add New Testimonials
          </button>
        </div>
      </section>

      {isModalOpen && <AddTestimonialModal closeModal={closeModal} />}
    </>
  );
};

export default AdminTestimonials;
