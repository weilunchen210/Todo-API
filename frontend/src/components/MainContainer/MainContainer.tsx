import { useEffect, useState } from 'react'
import './MainContainer.css'
import TodoList from '../TodoList/TodoList'
import { getTodoList } from '../../services/todoService';
import Modal from '../AddTaskModal/Modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTask, setNewTask] = useState({
    title: '',
    description: ''
  })
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

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(false)
    setNewTask({ title: '', description: '' })
  }

  


  return (
    <div className="container-wrapper">
      <div className="MainContainer">
        <div className = "header">
          <h1>
            To do List
          </h1>
          <button onClick ={() => setIsModalOpen(true)}>
            Add Task
          </button>
        </div>
        <TodoList todoList={todoList} onDelete={handleDelete}/>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleAddTask}>
          <h2>Add New Task</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              required
            />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </Modal>
    </div>
  )
}

export default MainContainer
