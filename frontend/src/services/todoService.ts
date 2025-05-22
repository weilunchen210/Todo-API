import apiClient from "./apiClient"
import Cookies from 'js-cookie';

interface todo{
  id:number;
  title:string;
  description:string;
  createdData:Date;
  status:string;
}

export const getTodoList = async (): Promise<todo[]> => {
  try {
    const jwt = Cookies.get('token')
    if (!jwt) {
      throw new Error('No authentication token found');
    }
    const response = await apiClient.get<todo[]>('/todo/user', {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};