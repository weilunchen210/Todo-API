import apiClient from "./apiClient"

interface newUser{
    username:string;
    email:string;
    password:string;
}

export const registerUser = async (newUser:newUser) => {
  try {
    const response = await apiClient.post('http://localhost:8080/user/register', newUser, {
        headers:{
            'Content-Type' : 'application/json'
        }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};