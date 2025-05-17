import { useState } from 'react'
import './MainContainer.css'
import TodoItem from '../TodoItem/TodoItem'
import TodoList from '../TodoList/TodoList'

function MainContainer() {
  const [todoList, settodoList] = useState([])

  return (
    <div className="container-wrapper">
      <div className="MainContainer">
        <h1>
            To do List
        </h1>
        <TodoList />
      </div>
    </div>
  )
}

export default MainContainer
