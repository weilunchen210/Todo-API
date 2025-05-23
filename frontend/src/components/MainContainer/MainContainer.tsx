import { useEffect, useState } from 'react'
import './MainContainer.css'
import TodoList from '../TodoList/TodoList'
import { addTask, deleteTask, getTodoList } from '../../services/todoService';
import Modal from '../AddTaskModal/Modal';
import type { todo } from '../../types/todo';

function MainContainer() {

  const [todoList,settodoList] = useState<todo[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTask, setNewTask] = useState("")
  // const dummyList:dummyTodo[] = [
  //   { id: 1, description: "Complete React project setup" },
  //   { id: 2, description: "Implement user authentication" },
  //   { id: 3, description: "Create responsive UI components" },
  //   { id: 4, description: "Add todo item deletion functionality" },
  //   { id: 5, description: "Connect to backend API" }
  // ]

  useEffect(() => {
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

  const handleDelete = async (id:number) => {
    try {
      await deleteTask(id);
      settodoList(todoList.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  }

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault()

    try{
      const createdTask = await addTask(newTask);
      settodoList([...todoList, createdTask]);
      setIsModalOpen(false)
      setNewTask("")
    }catch(error){
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    }
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
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
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
