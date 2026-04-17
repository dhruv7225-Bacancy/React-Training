
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    function logout(){
        localStorage.removeItem("authToken")
        navigate("/login")
    }
  return (
    <div>
      <Link to={"/dashboard"}>Dashboard</Link>
      <br />
      <Link to={"/profile"}>profile</Link>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar
