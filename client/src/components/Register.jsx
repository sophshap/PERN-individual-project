import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../App";

export default function Register({ setToken, setShowNav }) {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)
    useEffect(() => {
        setShowNav(true)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `${baseURL}/users`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    username,
                    password
                })
            }
            )
            if (response.status === 200) {
                alert("You're logged in!")
            }
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label>First Name:</label>
                    <input className="m-2" type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label>Last Name:</label>
                    <input className="m-2" type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label>Email:</label>
                    <input className="m-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
