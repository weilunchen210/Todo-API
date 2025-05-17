import { useState } from 'react'
import './MainContainer.css'

function MainContainer() {
  const [todoList, settodoList] = useState([])

  return (
    <div className="container-wrapper">
      <div className="MainContainer">
        <h1>
            To do List
        </h1>
      </div>
    </div>
  )
}

export default MainContainer
