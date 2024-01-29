import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../App";

export default function Login({ setToken, setShowNav }) {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    useEffect(() => {
        setShowNav(true)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `${baseURL}/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password: password
                })
            }
            )
            const result = await response.json();
            setToken(result.token)
            localStorage.setItem("token", result.token)
            navigate("/recipes")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label>Username:</label>
                    <input className="m-2" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label>
                        Password:
                    </label>
                    <input className="m-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <button className="mb-2" type="submit">Login</button>
                <p>Don't have an account? Register <Link to="/register">here.
                </Link></p>
            </form>
        </div>
    );
}