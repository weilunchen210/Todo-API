import { useState, useEffect } from 'react'
import "./ProfileContainer.css"
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'

function ProfileContainer() {

  const [username,setUsername] = useState("")
  const [profilePictureURL, setprofilePictureURL] = useState("")
  const [imageError, setImageError] = useState(false)
  const navigate = useNavigate();

  // interface ProfileProps {
  //   profilePicture: string;
  //   username: string;
  // }

  // const profile: ProfileProps = {
  //   profilePicture: "https://avatar.iran.liara.run/public/16",
  //   username: "David"
  // }

  const imagePlaceholder = "https://avatar.iran.liara.run/public/16"

  const handleImageError = () =>{
    setImageError(true)
  }

  const handleLogOut = () => {
    Cookies.remove("token")
    localStorage.removeItem('username')
    localStorage.removeItem('profilePictureURL')
    navigate('/login')
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    const storedProfilePictureURL = localStorage.getItem('profilePictureURL')
    if (storedUsername) {
      setUsername(storedUsername)
    }
    if (storedProfilePictureURL){
      setprofilePictureURL(storedProfilePictureURL)
      setImageError(false)
    }
    if (!storedProfilePictureURL){
      setImageError(true)
    }
  }, [])

  return (
    <div className= "profile-wrapper">
        <img src={imageError ? imagePlaceholder:profilePictureURL} className="profile-pictures" onError={handleImageError}>

        </img>
        <div className ="username">
            {username}
        </div>
        <button type="button" className="logout" onClick={handleLogOut}>
            Log Out
        </button>
    </div>
  )
}

export default ProfileContainer
