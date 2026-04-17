import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";

import ProtectedRoutes from "../components/guards/ProtectedRoutes";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";


const routes=[
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/",
        element:<ProtectedRoutes/>,
        children:[
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/profile",
                element:<Profile/>
            }
        ]
    }
]

export const router=createBrowserRouter(routes)