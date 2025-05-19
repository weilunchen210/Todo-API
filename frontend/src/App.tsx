import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Main from "./pages/Main"
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="main" element= {<Main /> }/>
        <Route path="login" element ={<Login />} />
        <Route path="register" element ={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
