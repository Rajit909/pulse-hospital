import React, { useEffect, useState } from "react";
import { API_END_POINT_FEEDBACK } from "../../api/Global.js";
import AddFeedbackModal from "./AddFeedbackModal.jsx";

const AdminFeedBacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(feedbacks);

  useEffect(() => {
    fetch(`${API_END_POINT_FEEDBACK}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container mx-auto px-5">
        <div className=" border rounded-lg">

      <div className="container mx-auto">
        <h2 className=" text-xl md:text-3xl font-bold text-center text-gray-800 dark:text-white my-4">
         Feedbacks  List
        </h2>
      </div>
        <div className="mx-auto pt-10">
            <div className="flex justify-center items-center">
          <table className=" border" style={{width: "100%"}}>
            <tr className=" border">
              <th className=" border p-4">Patient id</th>
              <th className=" border p-4">Patient name</th>
              <th className=" border p-4">Feedback</th>
              <th className=" border p-4">Image Url</th>
            </tr>

            {feedbacks.map((feedback, index) => (
              <tr className=" border" key={index}>
                <td className=" border p-4">{feedback.id}</td>
                <td className=" border p-4">{feedback.patient_name}</td>
                <td className=" border p-4">{feedback.feedback}</td>
                <td className=" border p-4">{feedback.patient_img_url}</td>
              </tr>
            ))}
          </table>
            </div>
      </div>

      </div>

          <div className="mt-8 flex justify-center items-center ">
            <button
              className=" bg-blue-800 transition-all hover:bg-blue-600 duration-300 p-2 text-white rounded-md"
              onClick={openModal}
            >
              Add New Feedback
            </button>
          </div>
      </div>


        {/* modal */}

        {
            isModalOpen &&
          <AddFeedbackModal closeModal={closeModal}/>
        }
    </>
  );
};

export default AdminFeedBacks;
