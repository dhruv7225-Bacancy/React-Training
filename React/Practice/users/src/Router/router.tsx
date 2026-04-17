
import { createBrowserRouter } from "react-router-dom"
import Login from "../components/Login"
import Dashboard from "../pages/Dashboard"
import ProtectedRoute from "../components/ProtectedRoute"

const routes = [
    
    {
        path: "/login",
        element: <Login />
    },
    {
        path:"/",
        element:<ProtectedRoute/>,
        children:[
            {
                path:"/dashboard",
                element:<Dashboard/>
            }
        ]
    }
    
]

export const router = createBrowserRouter(routes)