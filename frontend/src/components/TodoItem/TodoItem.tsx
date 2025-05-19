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
      <div className= "content">
        <input type="checkbox" checked={checked} onChange={handleChange}></input>
        <p className ={checked ? "done" : ""}>
          {text}
        </p>
      </div>
      <div className="buttons">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
      </div>
    </div>
  )
}

export default TodoItem
