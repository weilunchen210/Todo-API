import apiClient from "./apiClient"
import Cookies from "js-cookie"

interface newUser{
    username:string;
    email:string;
    password:string;
}

interface userLoginDetails{
    email:string;
    password:string
}

interface editUserDetails{
  username:string;
  email:string;
  password:string;
  profilePictureURL:string;
}



export const registerUser = async (newUser:newUser) => {
  try {
    const response = await apiClient.post('/user/register', newUser, {
        headers:{
            'Content-Type' : 'application/json'
        }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering: ', error);
    throw error;
  }
};

export const loginUser = async (userLoginDetails: userLoginDetails) => {
    try{
      const response = await apiClient.post('/user/login', userLoginDetails)
      
      if (response.data.token) {
          Cookies.set('token', response.data.token);
      }

      localStorage.setItem('username',response.data.username)
      localStorage.setItem('profilePictureURL',response.data.profilePictureURL)
      localStorage.setItem('email',response.data.email)
      console.log(response.data);
      return response.data
    }catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
}

export const editUser = async (editUserDetails: editUserDetails) => {
    try{
      const jwt = Cookies.get("token")
        const response = await apiClient.put('/user/edit', editUserDetails, {
          headers:{
              Authorization: `Bearer ${jwt}`
          }
      })
        
      if (response.data.token) {
          Cookies.set('token', response.data.token);
      }
      localStorage.setItem('username',response.data.username)
      localStorage.setItem('profilePictureURL',response.data.profilePictureURL)
      localStorage.setItem('email',response.data.email)
      console.log(response.data);
      return response.data
    }catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
}