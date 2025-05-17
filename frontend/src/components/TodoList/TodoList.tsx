import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'


function TodoList() {
  const [todoList, settodoList] = useState([])
  const test:string[] = ["number 1" , "number 2" , "number 3"]

  const itemList = test.map((text:string) => 
    <TodoItem text={text}>
    </TodoItem>
)

  return (
    <div>
         {itemList}
    </div>
  )
}

export default TodoList
