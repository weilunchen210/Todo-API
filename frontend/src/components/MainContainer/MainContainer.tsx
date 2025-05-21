import { useEffect, useState } from 'react'
import './MainContainer.css'
import TodoList from '../TodoList/TodoList'


interface todo{
  id:number;
  description:string;
}

function MainContainer() {

  const [todoList,settodoList] = useState<todo[]>([])
  const dummyList:todo[] = [
    { id: 1, description: "Complete React project setup" },
    { id: 2, description: "Implement user authentication" },
    { id: 3, description: "Create responsive UI components" },
    { id: 4, description: "Add todo item deletion functionality" },
    { id: 5, description: "Connect to backend API" }
  ]

  useEffect(() => {
    //Dummy for now, will be used to fetch API later
    settodoList(dummyList)
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
