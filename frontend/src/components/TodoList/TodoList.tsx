import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

interface todoListProps{
    todoList: string[]
}

function TodoList({todoList}:todoListProps) {

  const itemList = todoList.map((text:string) => 
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
