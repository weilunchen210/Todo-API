import { useEffect, useState } from 'react'
import "./LoginForm.css"


function  RegisterForm() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className="login-container-wrapper">
        <div className="login-box">
            <div className="login-title">
                <label className ="title">
                    Login
                </label>
            </div>
            <form>
            <div className="input">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                </div>
                <div className="input">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                </div>
                <div className="input">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                </div>
                <div className="submit">
                    <input className="form-button" type="submit" value="Register"></input>
                </div>
            </form>
        </div>
        </div>
    )
}

export default RegisterForm
