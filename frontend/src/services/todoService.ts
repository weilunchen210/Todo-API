import apiClient from "./apiClient"

interface todo{
  id:number;
  title:string;
  description:string;
  createdData:Date;
  status:string;
}

export const getTodoList = async (): Promise<todo[]> => {
  try {
    const response = await apiClient.get<todo[]>('/todo/user/1');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};