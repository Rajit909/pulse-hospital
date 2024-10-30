import React, { useEffect, useState } from "react";
import { API_END_POINT_SIGNIN  } from "../api/Global";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { toast } from "react-toastify";
import AdminNavbar from "../components/Admin/AdminNavbar";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();



  

  const handleSignin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch(`${API_END_POINT_SIGNIN}`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const data = await response.json();

    if (data.success) {
      toast.success(data.message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      navigate("/admindashboard");
    }else{
      toast.error(data.message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <>
    <AdminNavbar/>
      <main className="mx-auto flex h-screen w-full items-center justify-center dark:bg-darkbg text-white ">
        <section className="flex w-[30rem] flex-col space-y-10">

          <div className="text-center text-4xl font-medium">Admin Log In</div>
          <form
            onSubmit={handleSignin}
            className="flex w-[30rem] flex-col space-y-10 mx-auto px-4 md:px-0"
          >
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
              LOG IN
            </button>

            {/* <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a> */}

            <p className="text-center text-lg">
              <span className=" dark:text-white text-gray-700 font-semibold mr-1">
                {" "}
                No account ?
              </span>
              <Link
                to={"/admin/signup"}
                className="font-medium text-indigo-500 underline-offset-4 hover:underline"
              >
                Create One
              </Link>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
