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

interface userDetails{
    email:string;
    username:string;
}

interface LoginResponse {
    token: string;
    userId: number;
    username: string;
    email: string;
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

        console.log(response.data);
        return response.data
    }catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
}

export const getUserDetails = async()=> {
    try{
        const jwt = Cookies.get('token')
        if (!jwt) {
        throw new Error('No authentication token found');
        }
        const response = await apiClient.get<userDetails>('/todo/user', {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    });
    }catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
}