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
    }
    
  ])
  return (
    <>
        <RouterProvider router={appRouter} basename="/"/>


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
