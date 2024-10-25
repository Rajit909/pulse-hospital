// import React from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/shared/Navbar";
// import Footer from "../components/shared/Footer";
// import PagesTop from "../components/PagesTop";

// const newsDetails = [
//   {
//     id: 1,
//     title: "News Title 1",
//     desc: "Detailed description of News Title 1 .",
//   },
//   {
//     id: 2,
//     title: "News Title 2",
//     desc: "Detailed description of News Title 2...",
//   },
//   {
//     id: 3,
//     title: "News Title 3",
//     desc: "Detailed description of News Title 3...",
//   },
//   {
//     id: 4,
//     title: "News Title 3",
//     desc: "Detailed description of News Title 3...",
//   },
//   {
//     id: 5,
//     title: "News Title 3",
//     desc: "Detailed description of News Title 3...",
//   },
// ];

// const NewsDetail = () => {
//   const { id } = useParams();
//   const newsItem = newsDetails.find((item) => item.id === parseInt(id));

//   return (
//     <>
//     <Navbar />
//     <PagesTop title={"Pulse Hospital News"} />
//     <div className="p-8 dark:bg-darkbg">
//       {newsItem ? (
//         <>
//           <div className="dark:bg-slate-700 rounded bg-gray-100 dark:text-white py-4">
//         <div className="md:max-w-4xl max-w-xl rounded-md mx-auto flex flex-col justify-center items-center dark:bg-slate-500 bg-white shadow my-8 pb-4">
//         <h1 className="text-3xl font-bold pt-2">{newsItem.title}</h1>
//         <hr className="w-1/2 mx-auto my-2 border-t-2 border-blue-800" />
//         <p className=" p-2 m-4 shadow shadow-blue-500 border rounded-sm text-justify">{newsItem.desc}</p>
//       </div>
//       </div>
//         </>
//       ) : (
//         <div className="dark:bg-slate-700 rounded bg-gray-100 dark:text-white py-4">
//         <div className="md:max-w-4xl max-w-xl rounded-md mx-auto flex flex-col justify-center items-center dark:bg-slate-400 bg-white shadow my-8 pb-4">
//         <h1 className="text-md text-red-500 dark:text-red-600 font-bold pt-2">News Not Found</h1>
//       </div>
//       </div>
//       )}
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default NewsDetail;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PagesTop from "../components/PagesTop";
import { API_END_POINT_NEWS } from "../api/Global";

const NewsDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_END_POINT_NEWS}`)
      .then((response) => response.json())
      .then((newsList) => {
        // Find the specific news item based on the ID
        const selectedNews = newsList.find((news) => news.id === id);
        setData(selectedNews);
      })
      .catch((error) => console.log("Error fetching data", error));
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <PagesTop title={"Pulse Hospital News"} />
      <div className="p-8 dark:bg-darkbg">
        <div className="dark:bg-slate-700 rounded bg-gray-100 dark:text-white py-4">
          <div className="md:max-w-4xl max-w-xl rounded-md mx-auto flex flex-col justify-center items-center dark:bg-slate-500 bg-white shadow my-8 pb-4">
            <h1 className="text-3xl font-bold pt-2">{data.title}</h1>
            <hr className="w-1/2 mx-auto my-2 border-t-2 border-blue-800" />
            <p className="p-2 m-4 shadow shadow-blue-500 border rounded-sm text-justify">
              {data.descr}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetail;
