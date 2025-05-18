import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Main from "./pages/Main"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Main /> }/>
      </Routes>
    </Router>
  )
}

export default App
