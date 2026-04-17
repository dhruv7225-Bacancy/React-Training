import React from 'react'
import { useCookies } from 'react-cookie'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Login from '../Login'

const ProtectedRoutes = () => {
    const [cookies, setCookies] = useCookies()
    
    function logout() {
        setCookies("authToken", "")
    }
    if (cookies["authToken"]) {
        return <>
            <div>
                <Link to="/dashboard">Dashboard</Link>
                <br />
                <Link to="/profile">Profile</Link>
                <br />
                <Link to="/login" onClick={logout}>LogOut</Link>
            </div>
            <Outlet />

        </>
    }


    return <Navigate to={"/login"} />
}

export default ProtectedRoutes
