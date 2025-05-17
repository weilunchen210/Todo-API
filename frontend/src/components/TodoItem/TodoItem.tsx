import { useState } from 'react'
import "./TodoItem.css"

interface itemProps{
  text:string;
}

function TodoItem({text}:itemProps) {
  const [todoList, settodoList] = useState([])
  const [checked, setChecked] = useState(false)

  const handleChange = () =>{
    setChecked(!checked);
  }

  return (
    <div className= "todo-container">
      <input type="checkbox" checked={checked} onChange={handleChange}></input>
      <p className ={checked ? "done" : ""}>
        {text}
      </p>
    </div>
  )
}

export default TodoItem
