
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const ProtectedRoute = () => {
    if(localStorage.getItem("authToken")){
        return (
            <>
            <Navbar/>
            <Outlet/>

            </>
        )
    }
  return <Navigate to={"/login"}/>
}

export default ProtectedRoute
