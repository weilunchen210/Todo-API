import { useEffect, useState } from 'react'
import "./LoginForm.css"
import { Link } from 'react-router'


function  LoginForm() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

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
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
            </div>
            <div className="input">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
            </div>
            <div className="submit">
                <input className="button login-button" type="submit" value="Login"></input>
            </div>
            <div className="submit">
                <button className="button dummy-login-button">
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
