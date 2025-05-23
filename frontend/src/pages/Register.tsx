import { useEffect } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm"
import { useNavigate } from "react-router";
import Cookies from 'js-cookie'

function Register() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/main');
    }
  }, [navigate]);
  
  
    return (
      <div>
        <RegisterForm />
      </div>
    )
  }

export default Register