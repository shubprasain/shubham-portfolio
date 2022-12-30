import React from 'react';
import {useState, useEffect} from "react";
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigatie from './Componenten/Navigatie/Navigatie';
import Footer from './Componenten/Footer/Footer';
import Home from './Componenten/Pagina/Home/Home';
import Portfolio from './Componenten/Pagina/Portfolio/Portfolio';
import Contact from './Componenten/Pagina/Contact/Contact';
import { Oef1 } from './Componenten/Pagina/Portfolio/Oefeningen/Oef1';
import Oef2 from './Componenten/Pagina/Portfolio/Oefeningen/Oef2';
import Oef3 from './Componenten/Pagina/Portfolio/Oefeningen/Oef3';
import Oef4 from './Componenten/Pagina/Portfolio/Oefeningen/Oef4';
import Oef5 from './Componenten/Pagina/Portfolio/Oefeningen/Oef5';
import Oef6 from './Componenten/Pagina/Portfolio/Oefeningen/Oef6';
import Oef7 from './Componenten/Pagina/Portfolio/Oefeningen/Oef7';
import Oef8 from './Componenten/Pagina/Portfolio/Oefeningen/Oef8';
import Weer from './Componenten/API/Weer';






const Root = () => {
  return (
    <div>
     
      <div className='Nav' >
        
        <Navigatie />
        <Weer/>
      
       
      </div>
      <div>
        <Outlet />

      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />

        },
        {
          path: "/Portfolio",
          element: <Portfolio />
        },
        {
          path: "/Contact",
          element: <Contact />
        },
        {
          path : "/Oef1",
          element : <Oef1/>
        },
        {
          path : "/Oef2",
          element : <Oef2/>
        },
        {
          path : "/Oef3",
          element : <Oef3/>
        },
        {
          path : "/Oef4",
          element : <Oef4/>
        },
        {
          path  : "/Oef5",
          element : <Oef5/>
        },
        {
          path  : "/Oef6",
          element : <Oef6/>
        },
        {
          path  : "/Oef7",
          element : <Oef7/>
        },
        {
          path  : "/Oef8",
          element : <Oef8/>
        }





      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
