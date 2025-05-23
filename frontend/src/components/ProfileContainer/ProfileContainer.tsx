import { useState, useEffect } from 'react'
import "./ProfileContainer.css"
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import Modal from '../Modal/Modal'
import { editUser } from '../../services/userService'

function ProfileContainer() {

  const [username,setUsername] = useState("")
  const [profilePictureURL, setprofilePictureURL] = useState("")
  const [imageError, setImageError] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)


  const [editUsername,setEditUsername] = useState("")
  const [editProfilePictureURL, setEditProfilePictureURL] = useState("")
  const [editPassword, setEditPassword] = useState("")
  const [editEmail, setEditEmail] = useState("")
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
    localStorage.removeItem('email')
    navigate('/login')
  }

  const handleEditClick = () => {
    setEditUsername(username);
    setEditProfilePictureURL(profilePictureURL);
    setEditEmail(localStorage.getItem('email') || '');
    setEditPassword(''); // Keep password empty for security
    setIsProfileModalOpen(true);
  }

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
      try {
      // Prepare the data for API call
      const editUserDetails = {
        username: editUsername,
        email: editEmail,
        password: editPassword,
        profilePictureURL: editProfilePictureURL
      };
      
      // Call the API to update the user
      await editUser(editUserDetails);
      
      // Update local state
      setUsername(editUsername);
      setprofilePictureURL(editProfilePictureURL);
      setImageError(false);
      
      // Close the modal
      setIsProfileModalOpen(false);
      
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
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
        <button type ="button" className ="editProfile" onClick={handleEditClick}>
            Edit Profile Details
        </button>
        <button type="button" className="logout" onClick={handleLogOut}>
            Log Out
        </button>

        <Modal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)}>
          <div className="modal-header">
            <h2>Edit Profile</h2>
            <img src={editProfilePictureURL} className="profile-pictures"></img>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Username"
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Profile Picture URL"
                value={editProfilePictureURL}
                onChange={(e) => setEditProfilePictureURL(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Modal>
    </div>
  )
}

export default ProfileContainer
