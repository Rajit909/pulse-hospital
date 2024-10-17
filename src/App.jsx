import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Profiles from "./components/Profiles";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from "./pages/About-us";



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
      element: <Services/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/doctors",
      element: <Profiles/>
    }
    
  ])
  return (
    <>
        <Navbar />
        <RouterProvider router={appRouter} basename="/"/>
        <Footer />
      
    </>
  );
}

export default App;
