import "./App.css";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from "./pages/About-us";
import ContactUsPage from "./pages/ContactUsPage";
import ServicesPage from "./pages/ServicesPage";
import News from "./pages/News";
import TestimonialsPage from "./pages/TestimonialsPage";
import { FaArrowUp } from "react-icons/fa6";
import NewsDetail from "./pages/NewsDetail";
import EventsPage from "./pages/EventsPage";
import UnderConstruction from "./components/shared/UnderConstruction";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
<<<<<<< HEAD
import AdminPanel from "./pages/AdminPanel";
import Admin from "./components/Admin/Admin";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute.jsx";
=======
import AdminDashboard from "./pages/AdminDashboard";
import Admin from "./components/Admin";
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248


function App() {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/About",
      element: <AboutUs/>
    }, 
    {
      path: "/Services",
      element: <ServicesPage/>
    },
    {
      path: "/contact",
      element: <ContactUsPage/>
    },
    {
      path: "/doctors",
      element: <Profiles/>
    },
    {
      path: "/news",
      element: <News/>
    },
    {
      path: "/testimonials",
      element: <TestimonialsPage/>
    },
    {
      path: "/news/:id",
      element: <NewsDetail/>
    },
    {
      path: "/events",
      element: <EventsPage/>
    },
    {
      path: "/under-construction",
      element: <UnderConstruction/>
    },
    {
      path: "/admin/signin",
      element: <Signin/>
    },
    {
      path: "/admin/signup",
      element: <Signup/>
    },
    {
      path: "/admindashboard",
<<<<<<< HEAD
      element: 
          <AdminPanel/>
      
=======
      element: <AdminDashboard/>
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248
    },
    {
      path: "/admin",
      element: <Admin/>
<<<<<<< HEAD
    },
=======
    }
>>>>>>> ee27f2c23862f068f2de3d0ece9a411c07203248
    
  ])
  return (
    <>
        <RouterProvider router={appRouter} basename="/"/>
        <ToastContainer />

        <div className="fixed bottom-0 right-5 p-4 ">
            <a
              className="bg-blue-800 text-white dark:text-blue-200 rounded-full w-10 h-10 flex items-center justify-center"
              href="#"
            >
           <FaArrowUp />
            </a>
          </div>
    </>
  );
}

export default App;
