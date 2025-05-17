import { useState } from 'react'
import "./ProfileContainer.css"

function ProfileContainer() {
    

  interface ProfileProps {
    profilePicture: string;
    username: string;
  }

  const profile: ProfileProps = {
    profilePicture: "https://avatar.iran.liara.run/public/16",
    username: "David"
  }

  return (
    <div className= "profile-wrapper">
        <img src={profile.profilePicture} className="profile-pictures">

        </img>
        <div className ="username">
            {profile.username}
        </div>
        <button type="button" className="logout">
            Log Out
        </button>
    </div>
  )
}

export default ProfileContainer
