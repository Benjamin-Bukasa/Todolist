import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './../layouts/mainLayout';

const userRoutes = createBrowserRouter(
[
    {
        path: "/",
        element: <MainLayout/>,
    }

])
export default userRoutes;
