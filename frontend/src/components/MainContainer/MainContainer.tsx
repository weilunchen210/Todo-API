import { useEffect, useState } from 'react'
import './MainContainer.css'
import TodoList from '../TodoList/TodoList'
import { getTodoList } from '../../services/todoService';

interface todo{
  id:number;
  title:string;
  description:string;
  createdData:Date;
  status:string;
}

interface dummyTodo{
  id:number;
  description:string;
}

function MainContainer() {

  const [todoList,settodoList] = useState<todo[]>([])
  const dummyList:dummyTodo[] = [
    { id: 1, description: "Complete React project setup" },
    { id: 2, description: "Implement user authentication" },
    { id: 3, description: "Create responsive UI components" },
    { id: 4, description: "Add todo item deletion functionality" },
    { id: 5, description: "Connect to backend API" }
  ]

  useEffect(() => {
    //Dummy for now, will be used to fetch API later
    async function fetchTodoList(){
      try{
        const data = await getTodoList();
        settodoList(data);
        console.log(data)
      }catch(error){
      console.error(error)
    }
    }

    fetchTodoList();
  }, [])

  const handleDelete = () => {
    alert("Deleted")
  }


  return (
    <div className="container-wrapper">
      <div className="MainContainer">
        <div className = "header">
          <h1>
            To do List
          </h1>
          <button>
            Add Task
          </button>
        </div>
        <TodoList todoList={todoList} onDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default MainContainer
