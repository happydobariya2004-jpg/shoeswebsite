import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Foter from './Foter.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Nav.jsx/Home.jsx'
import About from './Nav.jsx/About.jsx'
import Iteam from './Nav.jsx/Iteam.jsx'
import Form from './Form.jsx'


import Iteamdet from './Nav.jsx/Iteamdet.jsx'
import Aboutdetalis from './Nav.jsx/Aboutdetalis.jsx'

// import Shopping from './Nav.jsx/Shopping.jsx'

// import { ShopData } from "./Nav.jsx/Shopdet";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Treanding from './Nav.jsx/Treanding.jsx'
import Treandingdata from './Nav.jsx/Treandingdata.jsx'
import TreandingData from './Nav.jsx/Treandingdata.jsx'
// import ShopDetails from './Nav.jsx/Shopdata.jsx'
import ShopData from './Nav.jsx/Shopdata.jsx'
import Shopping from './Nav.jsx/Shopping.jsx';


let allRout = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/iteam',
    element: <Iteam />

  },

  {
    path: "/Form",
    element: <Form />
  },

  {
    path: '/iteam/:id',
    element: <Iteamdet />
  },
  {
    path: '/about/:id',
    element: <Aboutdetalis />
  },


  {
    path: "/shopping",
    element: <Shopping />
  },
  {
    path: "/Shopping/:id",
    element: <ShopData />
  },
  {
    path: "/Treanding",
    element: <Treanding />
  },
  {
    path: "/Treanding/:id",
    element: <TreandingData />
  },

  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRout}>
      {/* <App/> */}
    </RouterProvider>
  </StrictMode>
)