
import type { todo } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem'

interface todoListProp{
  todoList: todo[];
  onDelete: (id:number) => void;
}

function TodoList({todoList, onDelete}: todoListProp) {

  const itemList = todoList.map((todo:todo) => 
    <TodoItem text={todo.task} id={todo.id} onDelete = {onDelete}>
    </TodoItem>
)

  return (
    <div>
         {itemList}
    </div>
  )
}

export default TodoList
