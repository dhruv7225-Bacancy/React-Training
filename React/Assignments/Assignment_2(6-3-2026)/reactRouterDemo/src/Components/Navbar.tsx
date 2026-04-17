import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
    const {user,isLoggedIn,logout}=useAuth();
  return (
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        {!isLoggedIn && <li><Link to={"/login"}>Login</Link></li>}
        {isLoggedIn && <li><Link to={"/dashboard"}>Dashboard</Link></li>}
        {isLoggedIn && <li><Link to={"/profile"}>Profile</Link></li>}
        {isLoggedIn && user.role==="admin" && <li><Link to={"/admin"}>Admin</Link></li>}
        {isLoggedIn &&  <button onClick={logout}>Logout</button>}
      </ul>
    </div>
  )
}

export default Navbar
