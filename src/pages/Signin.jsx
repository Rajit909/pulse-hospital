import React, { useState } from "react";
import { API_END_POINT_SIGNIN } from "../api/Global";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

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
    });

    const data = await response.json();

    if (data) {
      navigate("/admindashboard");
    }
  };

  return (
    <>
      <Navbar />
      <main class="mx-auto flex h-screen w-full items-center justify-center dark:bg-darkbg text-white ">
        <section class="flex w-[30rem] flex-col space-y-10">

          <div class="text-center text-4xl font-medium">Admin Log In</div>
          <form
            onSubmit={handleSignin}
            className="flex w-[30rem] flex-col space-y-10 mx-auto px-4 md:px-0"
          >
            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
              LOG IN
            </button>

            {/* <a href="#" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a> */}

            <p class="text-center text-lg">
              <span className=" dark:text-white text-gray-700 font-semibold mr-1">
                {" "}
                No account ?
              </span>
              <Link
                to={"/admin/signup"}
                class="font-medium text-indigo-500 underline-offset-4 hover:underline"
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
