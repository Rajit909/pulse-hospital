import "./App.css";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from "./pages/About-us";
import ContactUsPage from "./pages/ContactUsPage";
import ServicesPage from "./pages/ServicesPage";
import News from "./pages/News";
import TestimonialsPage from "./pages/TestimonialsPage";



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
    }
    
  ])
  return (
    <>
        <RouterProvider router={appRouter} basename="/"/>
      
    </>
  );
}

export default App;
