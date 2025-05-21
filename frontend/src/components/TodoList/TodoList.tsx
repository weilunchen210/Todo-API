import { useEffect, useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

interface todo{
  id:number;
  description:string;
}

interface todoListProp{
  todoList: todo[];
  onDelete: () => void;
}

function TodoList({todoList, onDelete}: todoListProp) {

  const itemList = todoList.map((todo:todo) => 
    <TodoItem text={todo.description} onDelete = {onDelete}>
    </TodoItem>
)

  return (
    <div>
         {itemList}
    </div>
  )
}

export default TodoList
