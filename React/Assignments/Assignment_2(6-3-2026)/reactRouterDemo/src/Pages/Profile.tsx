import React from 'react'
import { useAuth } from '../Context/AuthContext'

const Profile = () => {
    const {user}=useAuth()
  return (
    <div>
        Profile :
        <br />
      User: {user?.name}
      Age: {user?.age}
      Role : {user?.role}
    </div>
  )
}

export default Profile
