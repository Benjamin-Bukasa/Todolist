import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './../layouts/mainLayout';
import Activities from './../pages/Activities';
import Calendar from './../pages/Calendar';
import Dashboard from './../pages/dashboard';
import Messages from './../pages/Messages';
import Profile from './../pages/Profile';
// import Settings from './../pages/Settings';
import Tasks from './../pages/Tasks';
import Team from './../pages/Teams';
// import Login from './../pages/Login';
// import Register from './../pages/Register';
// import Notifications from './../pages/Notifications';


const userRoutes = createBrowserRouter(
[
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/dashboard",
                element:<Dashboard/>
            },
            {
                path:"calendar",
                element:<Calendar/>

            },
            {
                path:"activities",
                element:<Activities/>
            },
            {
                path:"messages",
                element:<Messages/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path:"tasks",
                element:<Tasks/>
            },
            {
                path:"teams",
                element:<Team/>
            },
            {
                path:"/settings",
                element:"Settings"
            },
            {
                path:"/login",
                element:"Login"
            },
            {
                path:"/register",
                element:"Register"
            },
            {
                path:"/notifications",
                element:"Notifications"
            }  
        ]
    },
    {
        path:"*",
        element:"404"
    }

])
export default userRoutes;
