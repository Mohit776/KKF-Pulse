import React from 'react'

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from './pages/home';
import WhyUs from './pages/whyUs';
import About from './pages/about';
import Contact from './pages/contact';


const Layout = () => {
  return (
    <>

      <Outlet /> {/* This renders the current page */}

    </>
  );
};

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

        { path: "/", element: <Home /> },

        { path: "/why-us", element: <WhyUs /> },

        { path: "/about", element: <About /> },

        { path: "/contact", element: <Contact /> },


      ]
    }
  ]);

  return <RouterProvider router={route} />;
}