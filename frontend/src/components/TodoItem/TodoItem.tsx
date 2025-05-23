import { useState } from 'react'
import "./TodoItem.css"

interface itemProps{
  id:number;
  text:string;
  onDelete: (id:number) => void;
  onEdit: (id:number,newText:string) => void
}

function TodoItem({id,text,onDelete, onEdit}:itemProps) {
  const [checked, setChecked] = useState(false)
  const [edit,setEdit] = useState(false)
  const [editedText, setEditedText] = useState(text)

  const handleChange = () =>{
    setChecked(!checked);
  }


  const handleClickEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    if(onDelete){
      onDelete(id)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editedText.trim() === '') {
      setEditedText(text); 
      setEdit(false);
      return;
    }
    onEdit(id,editedText)
    setEdit(false);

  }

  return (
    <div className= "todo-container">
      <div className= "content">
        <input type="checkbox" checked={checked} onChange={handleChange}></input>
        {edit ?
        <form onSubmit={handleSubmit}>
          <input value={editedText} type="text" onChange={(e) => setEditedText(e.target.value)}>
          </input> 
        </form>
        :
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
