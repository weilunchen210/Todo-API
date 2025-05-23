import { useState } from 'react'
import "./LoginForm.css"
import { Link, useNavigate } from 'react-router'
import { loginUser } from '../../services/userService';


function  LoginForm() {
    const navigate = useNavigate();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dummyCredentials = {
        email:"welper@gmail.com",
        password:"12345"
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userDetails = {
            email:email,
            password: password
        }
        try {
            await loginUser(userDetails);
            navigate('/main'); // Use navigate function here
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    const handleDummyLogin = async () => {
        try {
            await loginUser(dummyCredentials);
            navigate('/main'); // Use navigate function here
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

  return (
    <div className="login-container-wrapper">
      <div className="login-box">
        <div className="login-title">
            <label className ="title">
                Login
            </label>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="input">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
            </div>
            <div className="input">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
            </div>
            <div className="submit">
                <input className="button login-button" type="submit" value="Login"></input>
            </div>
            <div className="submit">
                <button className="button dummy-login-button" onClick={handleDummyLogin}>
                    Dummy Login
                </button>
            </div>
            <div className="register">
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
