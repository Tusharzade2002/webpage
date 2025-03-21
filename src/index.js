import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.jsx'
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import Course from './Course.jsx';
import Bootcamp from './Bootcamp.jsx';
import Contact from './Contact.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router =createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"/course",
        element:<Course />
    },
    {
        path:"/bootcamp",
        element:<Bootcamp/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])
root.render(
    <RouterProvider router={router} />
);


