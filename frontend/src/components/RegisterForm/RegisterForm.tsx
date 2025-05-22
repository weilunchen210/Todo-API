import { useEffect, useState } from 'react'
import "./RegisterForm.css"
import { registerUser } from '../../services/userService'


function  RegisterForm() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
            email: email
        }
        registerUser(newUser)
    }

    return (
        <div className="register-container-wrapper">
        <div className="register-box">
            <div className="register-title">
                <label className ="title">
                    Register
                </label>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="input">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required></input>
                </div>
                <div className="input">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required></input>
                </div>
                <div className="input">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required></input>
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
