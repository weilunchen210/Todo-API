import { useEffect } from "react";
import LoginForm from "../components/LoginForm/LoginForm"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router";


function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/main');
    }
  }, [navigate]);
  
    return (
      <div>
        <LoginForm />
      </div>
    )
  }

export default Login