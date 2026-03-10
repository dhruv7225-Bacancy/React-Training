import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const RoleBasedRoute = ({allowedRoles}) => {
    const {user,isLoggedIn}=useAuth()
  if(!isLoggedIn){
    return (
        <Navigate to="/login" replace/>
    )
  }

  if(!allowedRoles.includes(user.role)){
    return (<Navigate to="/unauthorized" replace/>)
  }
  return <Outlet/>
}

export default RoleBasedRoute
