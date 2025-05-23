import { useNavigate } from "react-router";
import MainContainer from "../components/MainContainer/MainContainer";
import ProfileContainer from "../components/ProfileContainer/ProfileContainer";
import { useEffect } from "react";
import Cookies from 'js-cookie'

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <ProfileContainer>

      </ProfileContainer>
      <MainContainer>
        
      </MainContainer>
    </div>
  )
}

export default Main