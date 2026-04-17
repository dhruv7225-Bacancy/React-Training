import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate=useNavigate()
    const [cookies,setCookies]=useCookies()

    function handleSubmit(e) {
        e.preventDefault();
        async function call() {
            const res =await fetch(
                "https://dummyjson.com/auth/login",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: name,
                        password: password
                    })
                }
            )
            if(res.ok){
                const data=await res.json()
                if(data){
                    setCookies("authToken",data?.refreshToken)
                    console.log(cookies["authToken"]);
                    console.log(data);
                    
                    navigate("/dashboard")
                }
            }
        }
        call()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Login:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <br />
                <label htmlFor="">Passwrod:</label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Login
