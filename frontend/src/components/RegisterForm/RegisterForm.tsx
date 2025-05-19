import { useEffect, useState } from 'react'
import "./RegisterForm.css"


function  RegisterForm() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className="register-container-wrapper">
        <div className="register-box">
            <div className="register-title">
                <label className ="title">
                    Register
                </label>
            </div>
            <form>
            <div className="input">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
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
