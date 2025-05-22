import { useState, useEffect } from 'react'
import "./ProfileContainer.css"

function ProfileContainer() {

  const [username,setUsername] = useState("")
  const [profilePictureURL, setprofilePictureURL] = useState("")
  const [imageError, setImageError] = useState(false)

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
  }, [])

  return (
    <div className= "profile-wrapper">
        <img src={imageError ? imagePlaceholder:profilePictureURL} className="profile-pictures" onError={handleImageError}>

        </img>
        <div className ="username">
            {username}
        </div>
        <button type="button" className="logout">
            Log Out
        </button>
    </div>
  )
}

export default ProfileContainer
