import { useState } from 'react'
import "./TodoItem.css"

interface itemProps{
  id:number;
  text:string;
  onDelete?: (id:number) => void;
}

function TodoItem({id,text,onDelete}:itemProps) {
  const [checked, setChecked] = useState(false)

  const handleChange = () =>{
    setChecked(!checked);
  }

  const [edit,setEdit] = useState(false)

  const handleClickEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    if(onDelete){
      onDelete(id)
    }
  }

  return (
    <div className= "todo-container">
      <div className= "content">
        <input type="checkbox" checked={checked} onChange={handleChange}></input>
        {edit ?
        <input value={text} type="text">
        </input> :
        <p className ={checked ? "done" : ""}>
          {text}
        </p>}
      </div>
      <div className="buttons">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" onClick={handleClickEdit}></img>
        <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" onClick={handleDelete}></img>
      </div>
    </div>
  )
}

export default TodoItem
