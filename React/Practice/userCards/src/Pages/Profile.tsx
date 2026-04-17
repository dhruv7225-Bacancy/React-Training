import React, { use, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

const Profile = () => {
    const [cookies,setCookies]=useCookies()
    const [user,setUser]=useState();
    useEffect(() => {
        fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${cookies["authToken"]}`, // Pass JWT via Authorization header
            } // Include cookies (e.g., accessToken) in the request
        })
            .then(res => res.json())
            .then(setUser);
    },[cookies["authToken"]])
    return (
        <div>
            <p>id:{user?.id}</p>
            <p>username:{user?.username}</p>
            <p>email:{user?.email}</p>
            <img src={user?.image} alt="" width={100} height={100}/>
            
        </div>
    )
}

export default Profile
