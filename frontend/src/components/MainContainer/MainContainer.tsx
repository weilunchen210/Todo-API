import { useEffect, useState } from 'react'
import './MainContainer.css'
import TodoList from '../TodoList/TodoList'

function MainContainer() {
  const [todoList,settodoList] = useState<string[]>([])


  const dummyList:string[] = ["test 1", "test 2", "test 3", "Test 4","test 5"]

  useEffect(() => {
    //Dummy for now, will be used to fetch API later
    settodoList(dummyList)
  }, [])

  return (
    <div className="container-wrapper">
      <div className="MainContainer">
        <h1>
            To do List
        </h1>
        <TodoList todoList={todoList}/>
      </div>
    </div>
  )
}

export default MainContainer
