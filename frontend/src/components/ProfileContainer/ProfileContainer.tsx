import { useState, useEffect } from 'react'
import "./ProfileContainer.css"

function ProfileContainer() {

  const [username,setUsername] = useState("")
    

  interface ProfileProps {
    profilePicture: string;
    username: string;
  }

  const profile: ProfileProps = {
    profilePicture: "https://avatar.iran.liara.run/public/16",
    username: "David"
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  return (
    <div className= "profile-wrapper">
        <img src={profile.profilePicture} className="profile-pictures">

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
