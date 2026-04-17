
import { useState } from 'react'
import { replace, useNavigate } from 'react-router-dom';
import { login } from '../axios/ApiClient';

const Login = () => {
    const [name, setName] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const navigate = useNavigate()
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>
    ) {
        e.preventDefault();
        login(name, pass)
        navigate("/dashboard",{
            replace:true
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login
