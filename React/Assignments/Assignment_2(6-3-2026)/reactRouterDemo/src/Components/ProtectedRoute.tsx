import React from 'react'
import { useAuth } from '../Context/AuthContext'
import Login from '../Pages/Login'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {


  const location=useLocation();
  const{isLoggedIn}=useAuth()

  if(!isLoggedIn){
    return <Navigate to="/login" state={{from:location}} replace/>
  }
  return <Outlet/>
  
}

export default ProtectedRoute
