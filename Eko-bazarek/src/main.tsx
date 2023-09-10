import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import './index.css'
import { Loader } from "./components/Loader.tsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage, ProductsPage, AboutUsPage, ContactPage, TermsPage, PolicyPage } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/terms",
        element: <TermsPage />,  
      },
      {
        path: "/policy",
        element: <PolicyPage />,  
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   
  </React.StrictMode>,
)
