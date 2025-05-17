import { Profiler, useState } from 'react'
import MainContainer from './components/MainContainer/MainContainer'
import ProfileContainer from './components/ProfileContainer/ProfileContainer'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Main from "./pages/Main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Main /> }/>
      </Routes>
    </Router>
  )
}

export default App
