import type { todo } from "../types/todo";
import apiClient from "./apiClient"
import Cookies from 'js-cookie';


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

export const addTask = async (task:string): Promise<todo> => {
  try {
    const jwt = Cookies.get('token')
    if (!jwt) {
      throw new Error('No authentication token found');
    }
    const response = await apiClient.post('/todo', task,{
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

export const deleteTask = async (id:number): Promise<todo> => {
  try {
    const jwt = Cookies.get('token')
    if (!jwt) {
      throw new Error('No authentication token found');
    }
    const response = await apiClient.delete(`/todo/${id}`,{
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