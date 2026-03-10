import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About'
import ProtectedRoute from '../Components/ProtectedRoute'
import Dashboard from '../Pages/Dashboard'
import Profile from '../Pages/Profile'
import Unauthorized from '../Pages/Unauthorized'
import RoleBasedRoute from '../Components/RoleBasedRoute'
import Admin from '../Pages/Admin'
import Error from '../Pages/Error'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "unauthorized",
                element: <Unauthorized />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    }

                ]
            },
            {
                element: <RoleBasedRoute allowedRoles={["admin"]} />,
                children: [
                    {
                        path: "admin",
                        element: <Admin />
                    }
                ]
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
])

