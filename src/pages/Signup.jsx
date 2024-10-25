import React, { useState } from 'react';
import { API_END_POINT_SIGNUP } from '../api/Global';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('password', password);

        const response = await fetch(`${API_END_POINT_SIGNUP}`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data) {
            navigate('/signin');
            console.log("signup success");
        }
    };

    return (
       <>
       <Navbar/>
   

<main class="mx-auto flex min-h-screen w-full items-center justify-center text-white dark:bg-darkbg">
    <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Admin sign up</div>

       <form onSubmit={handleSignup} className='flex w-[30rem] flex-col space-y-10 mx-auto px-4 md:px-0'>
       <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Email " value={email} onChange={(e) => setEmail(e.target.value)} class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>
       <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Fullname " value={fullname} onChange={(e) => setFullname(e.target.value)} class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">Sign Up</button>

        {/* <a href="#" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a> */}

        <p class="text-center text-lg">
            <span className=' text-gray-700 dark:text-white font-semibold mr-1'>Already have account ?</span>
            <Link to={'/admin/signin'} class="font-medium text-indigo-500 underline-offset-4 hover:underline">Log In</Link>
        </p>
       </form>
    </section>
</main>

        <Footer/>
       </>
    );
};

export default Signup;
